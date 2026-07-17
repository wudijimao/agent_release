import type { ApiErrorPayload } from "@bioagent/shared";

export class ApiError extends Error {
  readonly name = "ApiError";

  constructor(
    public readonly code: string,
    message: string,
    public readonly status: number,
    public readonly details?: unknown,
    public readonly requestId?: string,
  ) {
    super(message);
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function toApiErrorPayload(error: ApiError): ApiErrorPayload {
  return {
    code: error.code,
    message: error.message,
    ...(error.details === undefined ? {} : { details: error.details }),
    ...(error.requestId ? { requestId: error.requestId } : {}),
  };
}
