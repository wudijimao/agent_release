"use client";

import {
  RegisterPage,
  useNavigation,
  type RegisterIdentityInput,
  type RegisterInput,
  type RegisterMode,
} from "@bioagent/chatui";
import { useCallback } from "react";

import {
  getPhoneAuthErrorMessage,
  registerWithPhone,
  sendRegisterPhoneVerification,
  validateRegistrationIdentity,
} from "@/adapters/auth";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

export interface RegisterRouteProps {
  destination: string;
  mode: RegisterMode;
}

export function RegisterRoute({ destination, mode }: RegisterRouteProps) {
  const api = useApiClient();
  const { refreshSession } = useAuth();
  const navigation = useNavigation();

  const handleSendVerificationCode = useCallback(async (phoneNumber: string) => {
    try {
      const response = await sendRegisterPhoneVerification(api, phoneNumber);
      return {
        ok: true as const,
        message: `验证码已发送至 ${response.phoneMasked}`,
        resendAfterSeconds: response.resendAfterSeconds,
      };
    } catch (error) {
      return {
        ok: false as const,
        message: getPhoneAuthErrorMessage(error, "验证码发送失败，请稍后重试。"),
      };
    }
  }, [api]);

  const handleVerifyIdentity = useCallback(async (input: RegisterIdentityInput) => {
    try {
      await validateRegistrationIdentity(api, {
        email: input.email,
        ...(input.inviteCode ? { inviteCode: input.inviteCode } : {}),
      });
      return { ok: true as const };
    } catch (error) {
      return {
        ok: false as const,
        message: getPhoneAuthErrorMessage(error, "注册信息验证失败，请检查后重试。"),
      };
    }
  }, [api]);

  const handleRegister = useCallback(async (input: RegisterInput) => {
    try {
      await registerWithPhone(api, {
        email: input.email,
        password: input.password,
        name: input.name,
        phoneCountryCode: "86",
        phoneNumber: input.phoneNumber,
        phoneVerificationCode: input.phoneVerificationCode,
        ...(input.labName ? { labName: input.labName } : {}),
        ...(input.inviteCode ? { inviteCode: input.inviteCode } : {}),
      });
      const session = await refreshSession();
      if (!session) {
        return { ok: false as const, message: "注册成功，但会话加载失败，请重新登录。" };
      }
      return { ok: true as const };
    } catch (error) {
      return {
        ok: false as const,
        message: getPhoneAuthErrorMessage(error, "注册失败，请检查输入后重试。"),
      };
    }
  }, [api, refreshSession]);

  return (
    <RegisterPage
      mode={mode}
      onSendVerificationCode={handleSendVerificationCode}
      onVerifyIdentity={handleVerifyIdentity}
      onRegister={handleRegister}
      onEnterWorkspace={() => navigation.replace(destination)}
      onNavigate={(href, options) => options?.replace ? navigation.replace(href) : navigation.push(href)}
    />
  );
}
