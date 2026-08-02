import assert from "node:assert/strict";
import test from "node:test";

import type { AuthResponse } from "@bioagent/shared";

import { ApiError, type ApiClient } from "@/lib/api";

import {
  changeCurrentPassword,
  confirmPhonePasswordReset,
  getChangePasswordErrorField,
  getChangePasswordErrorMessage,
  getLoginErrorMessage,
  getPhoneAuthErrorMessage,
  loginWithPassword,
  registerWithPhone,
  sendPhonePasswordReset,
  sendRegisterPhoneVerification,
  validateRegistrationIdentity,
} from "./auth";

function createApiStub(
  post: ApiClient["post"],
): ApiClient {
  return {
    request: async () => {
      throw new Error("not implemented");
    },
    get: async () => {
      throw new Error("not implemented");
    },
    post,
    put: async () => {
      throw new Error("not implemented");
    },
    patch: async () => {
      throw new Error("not implemented");
    },
    delete: async () => {
      throw new Error("not implemented");
    },
  };
}

test("login adapter sends the shared contract without triggering global 401 handling", async () => {
  const response: AuthResponse = {
    user: {
      id: "user-1",
      email: "researcher@example.test",
      name: "Researcher",
      createdAt: "2026-07-16T00:00:00.000Z",
    },
    labs: [],
  };
  const calls: unknown[][] = [];
  const api = createApiStub(async (...args: unknown[]) => {
    calls.push(args);
    return response;
  });

  const result = await loginWithPassword(api, {
    email: "researcher@example.test",
    password: "secret",
    rememberLogin: false,
  });

  assert.equal(result, response);
  assert.deepEqual(calls, [
    [
      "/api/auth/login",
      {
        email: "researcher@example.test",
        password: "secret",
        rememberLogin: false,
      },
      { handleUnauthorized: false },
    ],
  ]);
});

test("login adapter translates known, rate-limited, server, and network failures", () => {
  assert.equal(
    getLoginErrorMessage(new ApiError("INVALID_CREDENTIALS", "Invalid", 401)),
    "邮箱或密码不正确。",
  );
  assert.equal(
    getLoginErrorMessage(new ApiError("RATE_LIMITED", "Limited", 429)),
    "登录尝试过于频繁，请稍后再试。",
  );
  assert.equal(
    getLoginErrorMessage(new ApiError("INTERNAL_ERROR", "Failed", 503)),
    "登录服务暂时不可用，请稍后重试。",
  );
  assert.equal(
    getLoginErrorMessage(new TypeError("fetch failed")),
    "无法连接服务器，请检查网络后重试。",
  );
});

test("phone auth adapter uses the registration and password reset contracts", async () => {
  const calls: unknown[][] = [];
  const api = createApiStub(async (...args: unknown[]) => {
    calls.push(args);
    if (args[0] === "/api/auth/account-status") return { exists: false };
    if (args[0] === "/api/auth/invite-status") return { lab: { id: "lab-1", name: "实验室" } };
    if (String(args[0]).endsWith("/send")) {
      return { phoneMasked: "138****5678", expiresInSeconds: 300, resendAfterSeconds: 60 };
    }
    if (args[0] === "/api/auth/password-reset/phone/confirm") {
      return { ok: true, requiresLogin: true };
    }
    return { user: { id: "user-1" }, labs: [] };
  });

  await sendRegisterPhoneVerification(api, "13812345678");
  await validateRegistrationIdentity(api, {
    email: "researcher@example.test",
    inviteCode: "123456",
  });
  await registerWithPhone(api, {
    email: "researcher@example.test",
    password: "secret123",
    name: "研究员",
    inviteCode: "123456",
    phoneCountryCode: "86",
    phoneNumber: "13812345678",
    phoneVerificationCode: "123456",
  });
  await sendPhonePasswordReset(api, {
    phoneCountryCode: "86",
    phoneNumber: "13812345678",
  });
  await confirmPhonePasswordReset(api, {
    phoneCountryCode: "86",
    phoneNumber: "13812345678",
    phoneVerificationCode: "123456",
    newPassword: "new-secret",
  });

  assert.deepEqual(calls, [
    ["/api/auth/phone-verification/send", { phoneCountryCode: "86", phoneNumber: "13812345678", purpose: "register" }, { handleUnauthorized: false }],
    ["/api/auth/account-status", { email: "researcher@example.test" }, { handleUnauthorized: false }],
    ["/api/auth/invite-status", { inviteCode: "123456" }, { handleUnauthorized: false }],
    ["/api/auth/register", {
      email: "researcher@example.test",
      password: "secret123",
      name: "研究员",
      inviteCode: "123456",
      phoneCountryCode: "86",
      phoneNumber: "13812345678",
      phoneVerificationCode: "123456",
    }, { handleUnauthorized: false }],
    ["/api/auth/password-reset/phone/send", { phoneCountryCode: "86", phoneNumber: "13812345678" }, { handleUnauthorized: false }],
    ["/api/auth/password-reset/phone/confirm", {
      phoneCountryCode: "86",
      phoneNumber: "13812345678",
      phoneVerificationCode: "123456",
      newPassword: "new-secret",
    }, { handleUnauthorized: false }],
  ]);
});

test("phone auth errors map server codes to actionable Chinese messages", () => {
  assert.equal(getPhoneAuthErrorMessage(new ApiError("INVALID_PHONE", "bad", 400), "fallback"), "请输入有效的中国大陆手机号。");
  assert.equal(getPhoneAuthErrorMessage(new ApiError("PHONE_EXISTS", "bad", 400), "fallback"), "该手机号已绑定其他账号。");
  assert.equal(getPhoneAuthErrorMessage(new ApiError("PHONE_VERIFICATION_INVALID", "bad", 400), "fallback"), "短信验证码无效或已过期。");
  assert.equal(getPhoneAuthErrorMessage(new ApiError("PHONE_VERIFICATION_LOCKED", "bad", 429), "fallback"), "验证码错误次数过多，请重新获取。");
  assert.equal(getPhoneAuthErrorMessage(new ApiError("INVALID_INVITE", "bad", 400), "fallback"), "邀请码无效，请检查后重试。");
});

test("change password adapter preserves invalid-current-password as a form error", async () => {
  const calls: unknown[][] = [];
  const api = createApiStub(async (...args: unknown[]) => {
    calls.push(args);
    return { ok: true, requiresLogin: true };
  });

  const result = await changeCurrentPassword(api, {
    currentPassword: "old-secret",
    newPassword: "new-secret",
  });

  assert.deepEqual(result, { ok: true, requiresLogin: true });
  assert.deepEqual(calls, [
    [
      "/api/auth/change-password",
      { currentPassword: "old-secret", newPassword: "new-secret" },
      { handleUnauthorized: false },
    ],
  ]);
});

test("change password adapter translates password and service failures", () => {
  assert.equal(
    getChangePasswordErrorMessage(
      new ApiError("INVALID_CURRENT_PASSWORD", "Unauthorized", 401),
    ),
    "当前密码不正确",
  );
  assert.equal(
    getChangePasswordErrorMessage(
      new ApiError("PASSWORD_REUSED", "Bad Request", 400),
    ),
    "新密码不能与当前密码相同",
  );
  assert.equal(
    getChangePasswordErrorMessage(
      new ApiError("HTTP_400", "Bad Request", 400),
    ),
    "新密码至少需要 6 位",
  );
  assert.equal(
    getChangePasswordErrorMessage(
      new ApiError("RATE_LIMITED", "Too Many Requests", 429),
    ),
    "操作过于频繁，请稍后再试",
  );
  assert.equal(
    getChangePasswordErrorMessage(
      new ApiError("INTERNAL_ERROR", "Internal Server Error", 503),
    ),
    "密码服务暂时不可用，请稍后重试",
  );
  assert.equal(
    getChangePasswordErrorMessage(new TypeError("fetch failed")),
    "无法连接服务器，请检查网络后重试。",
  );
});

test("change password adapter maps server codes to their matching fields", () => {
  assert.equal(
    getChangePasswordErrorField(
      new ApiError("INVALID_CURRENT_PASSWORD", "当前密码不正确", 401),
    ),
    "currentPassword",
  );
  assert.equal(
    getChangePasswordErrorField(
      new ApiError("PASSWORD_REUSED", "新密码不能与当前密码相同", 400),
    ),
    "newPassword",
  );
  assert.equal(
    getChangePasswordErrorField(
      new ApiError("HTTP_400", "Bad Request", 400),
    ),
    "newPassword",
  );
  assert.equal(
    getChangePasswordErrorField(
      new ApiError("RATE_LIMITED", "请求过于频繁", 429),
    ),
    "form",
  );
});
