"use client";

import {
  ForgotPasswordPage,
  useNavigation,
  type ForgotPasswordInput,
} from "@bioagent/chatui";
import { useCallback } from "react";

import {
  confirmPhonePasswordReset,
  getPhoneAuthErrorMessage,
  sendPhonePasswordReset,
} from "@/adapters/auth";
import { useApiClient } from "@/providers/AuthProvider";

export function ForgotPasswordRoute() {
  const api = useApiClient();
  const navigation = useNavigation();

  const handleSendCode = useCallback(async (phoneNumber: string) => {
    try {
      const response = await sendPhonePasswordReset(api, {
        phoneCountryCode: "86",
        phoneNumber,
      });
      return {
        ok: true as const,
        message: `如果账号存在，验证码会发送至 ${response.phoneMasked}`,
        resendAfterSeconds: response.resendAfterSeconds,
      };
    } catch (error) {
      return {
        ok: false as const,
        message: getPhoneAuthErrorMessage(error, "验证码发送失败，请稍后重试。"),
      };
    }
  }, [api]);

  const handleResetPassword = useCallback(async (input: ForgotPasswordInput) => {
    try {
      await confirmPhonePasswordReset(api, {
        phoneCountryCode: "86",
        phoneNumber: input.phoneNumber,
        phoneVerificationCode: input.phoneVerificationCode,
        newPassword: input.newPassword,
      });
      return { ok: true as const };
    } catch (error) {
      return {
        ok: false as const,
        message: getPhoneAuthErrorMessage(error, "密码重置失败，请检查输入后重试。"),
      };
    }
  }, [api]);

  return (
    <ForgotPasswordPage
      onSendCode={handleSendCode}
      onResetPassword={handleResetPassword}
      onBackToLogin={(options) => options?.replace ? navigation.replace("/login") : navigation.push("/login")}
    />
  );
}
