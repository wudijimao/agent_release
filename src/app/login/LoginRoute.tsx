"use client";

import {
  LoginPage,
  useNavigation,
  type LoginInput,
  type LoginResult,
} from "@bioagent/chatui";
import { useCallback, useEffect, useRef } from "react";

import { getLoginErrorMessage, loginWithPassword } from "@/adapters/auth";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

export interface LoginRouteProps {
  destination: string;
}

export function LoginRoute({ destination }: LoginRouteProps) {
  const api = useApiClient();
  const { status, refreshSession } = useAuth();
  const navigation = useNavigation();
  const submittedLoginRef = useRef(false);

  useEffect(() => {
    if (status === "authenticated" && !submittedLoginRef.current) {
      navigation.replace(destination);
    }
  }, [destination, navigation, status]);

  const handleLogin = useCallback(
    async (input: LoginInput): Promise<LoginResult> => {
      submittedLoginRef.current = false;

      try {
        await loginWithPassword(api, input);
        submittedLoginRef.current = true;

        const session = await refreshSession();
        if (!session) {
          return {
            ok: false,
            message: "登录成功，但会话加载失败，请重试。",
          };
        }

        return { ok: true };
      } catch (error) {
        return { ok: false, message: getLoginErrorMessage(error) };
      }
    },
    [api, refreshSession],
  );

  return (
    <LoginPage
      onLogin={handleLogin}
      onLoginSuccess={() => navigation.replace(destination)}
      onNavigate={(href, options) => {
        if (options?.replace) navigation.replace(href);
        else navigation.push(href);
      }}
    />
  );
}
