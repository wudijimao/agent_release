import type { CurrentUserResponse, User } from "@bioagent/shared";

import { ApiError } from "@/lib/api";

export type AuthStatus =
  | "loading"
  | "authenticated"
  | "unauthenticated"
  | "error";

export interface SessionState {
  status: AuthStatus;
  data: CurrentUserResponse | null;
  error: ApiError | null;
}

export const initialSessionState: SessionState = {
  status: "loading",
  data: null,
  error: null,
};

export function loadingSessionState(previous: SessionState): SessionState {
  return {
    status: "loading",
    data: previous.data,
    error: null,
  };
}

export function authenticatedSessionState(
  data: CurrentUserResponse,
): SessionState {
  return {
    status: "authenticated",
    data,
    error: null,
  };
}

export function replaceSessionUser(previous: SessionState, user: User): SessionState {
  if (!previous.data) return previous;
  return {
    ...previous,
    data: { ...previous.data, user },
  };
}

export function failedSessionState(error: unknown): SessionState {
  if (error instanceof ApiError && error.status === 401) {
    return {
      status: "unauthenticated",
      data: null,
      error: null,
    };
  }

  return {
    status: "error",
    data: null,
    error:
      error instanceof ApiError
        ? error
        : new ApiError(
            "SESSION_LOAD_FAILED",
            error instanceof Error ? error.message : "Failed to load session",
            0,
          ),
  };
}

export function buildLoginHref(pathname: string, search = "") {
  if (pathname === "/login" || pathname === "/register") return null;
  const currentLocation = `${pathname}${search}`;
  return `/login?next=${encodeURIComponent(currentLocation)}`;
}
