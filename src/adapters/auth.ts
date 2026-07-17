import type { AuthResponse, LoginRequest } from "@bioagent/shared";

import { isApiError, type ApiClient } from "@/lib/api";

export async function loginWithPassword(
  api: ApiClient,
  request: LoginRequest,
): Promise<AuthResponse> {
  return api.post<AuthResponse>("/api/auth/login", request, {
    handleUnauthorized: false,
  });
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
