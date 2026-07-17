import {
  BIOAGENT_REQUEST_ID_HEADER,
  FALLBACK_REQUEST_ID_HEADER,
  LAB_ID_HEADER,
  type ApiErrorPayload,
} from "@bioagent/shared";

import { ApiError } from "./api-error";
import { getDefaultApiBaseUrl, normalizeApiBaseUrl } from "./environment";

const MAX_REQUEST_ID_LENGTH = 128;

export interface UnauthorizedContext {
  error: ApiError;
  path: string;
}

export interface ApiClientOptions {
  baseUrl?: string;
  fetch?: typeof fetch;
  getLabId?: () => string | null | undefined;
  onUnauthorized?: (context: UnauthorizedContext) => void;
}

export type ApiRequestOptions = RequestInit & {
  labId?: string | null;
  handleUnauthorized?: boolean;
};

export interface ApiClient {
  request<T>(path: string, options?: ApiRequestOptions): Promise<T>;
  get<T>(path: string, options?: ApiRequestOptions): Promise<T>;
  post<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T>;
  put<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T>;
  patch<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T>;
  delete<T>(path: string, options?: ApiRequestOptions): Promise<T>;
}

function normalizeRequestId(value: string | null | undefined) {
  const requestId = value?.trim();
  return requestId ? requestId.slice(0, MAX_REQUEST_ID_LENGTH) : null;
}

function createRequestId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return `next-${globalThis.crypto.randomUUID()}`;
  }

  return `next-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function ensureRequestId(headers: Headers) {
  const requestId =
    normalizeRequestId(headers.get(BIOAGENT_REQUEST_ID_HEADER)) ||
    normalizeRequestId(headers.get(FALLBACK_REQUEST_ID_HEADER)) ||
    createRequestId();

  headers.set(BIOAGENT_REQUEST_ID_HEADER, requestId);
  return requestId;
}

function responseRequestId(response: Response, fallback: string) {
  return (
    normalizeRequestId(response.headers.get(BIOAGENT_REQUEST_ID_HEADER)) ||
    normalizeRequestId(response.headers.get(FALLBACK_REQUEST_ID_HEADER)) ||
    fallback
  );
}

function isFormData(value: unknown): value is FormData {
  return typeof FormData !== "undefined" && value instanceof FormData;
}

function buildUrl(baseUrl: string, path: string) {
  if (!path.startsWith("/")) {
    throw new TypeError(`API path must start with "/": ${path}`);
  }

  return `${baseUrl}${path}`;
}

async function parseResponseBody(response: Response) {
  if (response.status === 204) return undefined;

  const text = await response.text();
  if (!text) return undefined;

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getErrorPayload(payload: unknown, response: Response): ApiErrorPayload {
  if (isRecord(payload) && isRecord(payload.error)) {
    const code = payload.error.code;
    const message = payload.error.message;

    if (typeof code === "string" && typeof message === "string") {
      return {
        code,
        message,
        ...(payload.error.details === undefined
          ? isRecord(payload) && payload.data !== undefined
            ? { details: payload.data }
            : {}
          : { details: payload.error.details }),
        ...(typeof payload.error.requestId === "string"
          ? { requestId: payload.error.requestId }
          : {}),
      };
    }
  }

  return {
    code: `HTTP_${response.status}`,
    message:
      typeof payload === "string" && payload.trim()
        ? payload
        : response.statusText || "Request failed",
  };
}

function unwrapSuccess<T>(payload: unknown): T {
  if (isRecord(payload) && "data" in payload) {
    return payload.data as T;
  }

  return payload as T;
}

function withJsonBody(body: unknown, options: ApiRequestOptions): ApiRequestOptions {
  if (body === undefined) return options;
  if (isFormData(body)) return { ...options, body };

  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return {
    ...options,
    headers,
    body: JSON.stringify(body),
  };
}

export function createApiClient(options: ApiClientOptions = {}): ApiClient {
  const baseUrl = normalizeApiBaseUrl(options.baseUrl ?? getDefaultApiBaseUrl());
  const fetchImpl = options.fetch ?? globalThis.fetch;

  async function request<T>(
    path: string,
    requestOptions: ApiRequestOptions = {},
  ): Promise<T> {
    const {
      labId: requestedLabId,
      handleUnauthorized = true,
      ...fetchOptions
    } = requestOptions;
    const headers = new Headers(fetchOptions.headers);
    const labId = requestedLabId === undefined ? options.getLabId?.() : requestedLabId;

    if (labId) headers.set(LAB_ID_HEADER, labId);
    if (isFormData(fetchOptions.body)) headers.delete("Content-Type");

    const requestId = ensureRequestId(headers);
    const response = await fetchImpl(buildUrl(baseUrl, path), {
      ...fetchOptions,
      headers,
      credentials: fetchOptions.credentials ?? "include",
    });
    const payload = await parseResponseBody(response);

    if (response.ok) return unwrapSuccess<T>(payload);

    const errorPayload = getErrorPayload(payload, response);
    const error = new ApiError(
      errorPayload.code,
      errorPayload.message,
      response.status,
      errorPayload.details,
      responseRequestId(response, errorPayload.requestId || requestId),
    );

    if (response.status === 401 && handleUnauthorized) {
      options.onUnauthorized?.({ error, path });
    }

    throw error;
  }

  return {
    request,
    get: (path, requestOptions) =>
      request(path, { ...requestOptions, method: "GET" }),
    post: (path, body, requestOptions = {}) =>
      request(path, {
        ...withJsonBody(body, requestOptions),
        method: "POST",
      }),
    put: (path, body, requestOptions = {}) =>
      request(path, {
        ...withJsonBody(body, requestOptions),
        method: "PUT",
      }),
    patch: (path, body, requestOptions = {}) =>
      request(path, {
        ...withJsonBody(body, requestOptions),
        method: "PATCH",
      }),
    delete: (path, requestOptions) =>
      request(path, { ...requestOptions, method: "DELETE" }),
  };
}
