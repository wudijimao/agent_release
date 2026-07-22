import type {
  AuthResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  LoginRequest,
} from "@bioagent/shared";

import { isApiError, type ApiClient } from "@/lib/api";

export async function loginWithPassword(
  api: ApiClient,
  request: LoginRequest,
): Promise<AuthResponse> {
  return api.post<AuthResponse>("/api/auth/login", request, {
    handleUnauthorized: false,
  });
}

export async function changeCurrentPassword(
  api: ApiClient,
  request: ChangePasswordRequest,
): Promise<ChangePasswordResponse> {
  return api.post<ChangePasswordResponse>(
    "/api/auth/change-password",
    request,
    { handleUnauthorized: false },
  );
}

export function getChangePasswordErrorMessage(error: unknown): string {
  if (!isApiError(error)) {
    return "无法连接服务器，请检查网络后重试。";
  }

  if (error.code === "INVALID_CURRENT_PASSWORD") {
    return "当前密码不正确。";
  }

  if (error.code === "PASSWORD_REUSED") {
    return "新密码不能与当前密码相同。";
  }

  if (error.code === "RATE_LIMITED" || error.status === 429) {
    return "修改密码操作过于频繁，请稍后再试。";
  }

  if (error.status >= 500) {
    return "密码服务暂时不可用，请稍后重试。";
  }

  return error.message || "密码修改失败，请检查输入后重试。";
}

export function getLoginErrorMessage(error: unknown): string {
  if (!isApiError(error)) {
    return "无法连接服务器，请检查网络后重试。";
  }

  if (error.code === "INVALID_CREDENTIALS") {
    return "邮箱或密码不正确。";
  }

  if (error.code === "RATE_LIMITED" || error.status === 429) {
    return "登录尝试过于频繁，请稍后再试。";
  }

  if (error.status >= 500) {
    return "登录服务暂时不可用，请稍后重试。";
  }

  return "登录失败，请检查输入后重试。";
}
