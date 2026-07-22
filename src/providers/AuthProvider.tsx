"use client";

import { useNavigation } from "@bioagent/chatui";
import type { CurrentUserResponse, LogoutResponse, User } from "@bioagent/shared";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { createApiClient, type ApiClient } from "@/lib/api";

import {
  authenticatedSessionState,
  buildLoginHref,
  failedSessionState,
  initialSessionState,
  loadingSessionState,
  replaceSessionUser,
  type AuthStatus,
  type SessionState,
} from "./session-state";

export interface AuthContextValue {
  status: AuthStatus;
  user: CurrentUserResponse["user"] | null;
  error: SessionState["error"];
  refreshSession(): Promise<CurrentUserResponse | null>;
  updateUser(user: User): void;
  signOut(): Promise<void>;
}

interface SessionController {
  state: SessionState;
  setState: Dispatch<SetStateAction<SessionState>>;
  api: ApiClient;
  refreshSession(): Promise<CurrentUserResponse | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const SessionControllerContext = createContext<SessionController | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigation = useNavigation();
  const [state, setState] = useState(initialSessionState);
  const activeLabId = state.data?.activeLab?.id ?? null;

  const handleUnauthorized = useCallback(() => {
    setState({ status: "unauthenticated", data: null, error: null });

    if (typeof window === "undefined") return;
    const loginHref = buildLoginHref(window.location.pathname, window.location.search);
    if (loginHref) navigation.replace(loginHref);
  }, [navigation]);

  const api = useMemo(
    () =>
      createApiClient({
        getLabId: () => activeLabId,
        onUnauthorized: handleUnauthorized,
      }),
    [activeLabId, handleUnauthorized],
  );

  const refreshSession = useCallback(async () => {
    setState((current) => loadingSessionState(current));

    try {
      const session = await api.get<CurrentUserResponse>("/api/auth/me", {
        handleUnauthorized: false,
      });
      setState(authenticatedSessionState(session));
      return session;
    } catch (error) {
      setState(failedSessionState(error));
      return null;
    }
  }, [api]);

  const signOut = useCallback(async () => {
    try {
      await api.post<LogoutResponse>("/api/auth/logout", undefined, {
        handleUnauthorized: false,
      });
    } catch {
      // Clearing local session state must not be blocked by a failed logout request.
    } finally {
      setState({ status: "unauthenticated", data: null, error: null });
      navigation.replace("/login");
    }
  }, [api, navigation]);

  const updateUser = useCallback((nextUser: User) => {
    setState((current) => replaceSessionUser(current, nextUser));
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    api
      .get<CurrentUserResponse>("/api/auth/me", {
        handleUnauthorized: false,
        signal: controller.signal,
      })
      .then((session) => setState(authenticatedSessionState(session)))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setState(failedSessionState(error));
      });

    return () => controller.abort();
  }, [api]);

  const authValue = useMemo<AuthContextValue>(
    () => ({
      status: state.status,
      user: state.data?.user ?? null,
      error: state.error,
      refreshSession,
      updateUser,
      signOut,
    }),
    [refreshSession, signOut, state.data?.user, state.error, state.status, updateUser],
  );
  const controllerValue = useMemo<SessionController>(
    () => ({ state, setState, api, refreshSession }),
    [api, refreshSession, state],
  );

  return (
    <SessionControllerContext.Provider value={controllerValue}>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </SessionControllerContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}

export function useSessionController() {
  const value = useContext(SessionControllerContext);
  if (!value) {
    throw new Error("useSessionController must be used within AuthProvider");
  }
  return value;
}

export function useApiClient() {
  return useSessionController().api;
}
