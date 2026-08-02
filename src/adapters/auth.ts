import type {
  AuthResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  LoginRequest,
  PhonePasswordResetConfirmRequest,
  PhonePasswordResetConfirmResponse,
  PhonePasswordResetSendRequest,
  PhoneVerificationSendResponse,
  RegisterRequest,
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

export function sendRegisterPhoneVerification(
  api: ApiClient,
  phoneNumber: string,
) {
  return api.post<PhoneVerificationSendResponse>(
    "/api/auth/phone-verification/send",
    { phoneCountryCode: "86", phoneNumber, purpose: "register" },
    { handleUnauthorized: false },
  );
}

export async function validateRegistrationIdentity(
  api: ApiClient,
  request: Pick<RegisterRequest, "email" | "inviteCode">,
) {
  const account = await api.post<{ exists: boolean }>(
    "/api/auth/account-status",
    { email: request.email },
    { handleUnauthorized: false },
  );
  if (account.exists) {
    throw new Error("EMAIL_EXISTS");
  }

  if (request.inviteCode) {
    await api.post<{ lab: { id: string; name: string } }>(
      "/api/auth/invite-status",
      { inviteCode: request.inviteCode },
      { handleUnauthorized: false },
    );
  }
}

export function registerWithPhone(api: ApiClient, request: RegisterRequest) {
  return api.post<AuthResponse>("/api/auth/register", request, {
    handleUnauthorized: false,
  });
}

export function sendPhonePasswordReset(
  api: ApiClient,
  request: PhonePasswordResetSendRequest,
) {
  return api.post<PhoneVerificationSendResponse>(
    "/api/auth/password-reset/phone/send",
    request,
    { handleUnauthorized: false },
  );
}

export function confirmPhonePasswordReset(
  api: ApiClient,
  request: PhonePasswordResetConfirmRequest,
) {
  return api.post<PhonePasswordResetConfirmResponse>(
    "/api/auth/password-reset/phone/confirm",
    request,
    { handleUnauthorized: false },
  );
}

export function getPhoneAuthErrorMessage(
  error: unknown,
  fallback: string,
): string {
  if (error instanceof Error && error.message === "EMAIL_EXISTS") {
    return "该邮箱已注册，请直接登录。";
  }
  if (!isApiError(error)) {
    return "无法连接服务器，请检查网络后重试。";
  }

  const messages: Record<string, string> = {
    INVALID_PHONE: "请输入有效的中国大陆手机号。",
    PHONE_EXISTS: "该手机号已绑定其他账号。",
    PHONE_VERIFICATION_RESEND_COOLDOWN: "验证码发送过于频繁，请稍后再试。",
    PHONE_VERIFICATION_INVALID: "短信验证码无效或已过期。",
    PHONE_VERIFICATION_LOCKED: "验证码错误次数过多，请重新获取。",
    EMAIL_EXISTS: "该邮箱已注册，请直接登录。",
    INVALID_INVITE_FORMAT: "邀请码格式不正确。",
    INVALID_INVITE: "邀请码无效，请检查后重试。",
    INVALID_REGISTER: "注册信息不完整或格式不正确。",
    RATE_LIMITED: "操作过于频繁，请稍后再试。",
  };

  if (messages[error.code]) return messages[error.code];
  if (error.status >= 500) return "认证服务暂时不可用，请稍后重试。";
  return fallback;
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
    return "当前密码不正确";
  }

  if (error.code === "PASSWORD_REUSED") {
    return "新密码不能与当前密码相同";
  }

  if (error.code === "HTTP_400" && error.status === 400) {
    return "新密码至少需要 6 位";
  }

  if (error.code === "NOT_FOUND") {
    return "用户不存在，请重新登录";
  }

  if (error.code === "RATE_LIMITED" || error.status === 429) {
    return "操作过于频繁，请稍后再试";
  }

  if (error.status >= 500) {
    return "密码服务暂时不可用，请稍后重试";
  }

  return "密码修改失败，请检查输入后重试";
}

export function getChangePasswordErrorField(
  error: unknown,
): "currentPassword" | "newPassword" | "form" {
  if (!isApiError(error)) return "form";
  if (error.code === "INVALID_CURRENT_PASSWORD") return "currentPassword";
  if (error.code === "PASSWORD_REUSED") return "newPassword";
  if (error.code === "HTTP_400" && error.status === 400) return "newPassword";
  return "form";
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
