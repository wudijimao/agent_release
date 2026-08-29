"use client";

import { ChatUIThemeProvider, NavigationProvider } from "@bioagent/chatui";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, type ReactNode } from "react";

import { createNavigationAdapter } from "@/adapters/navigation";
import {
  initializeFirebaseAnalytics,
  setFirebaseAnalyticsUser,
} from "@/lib/firebase";

import { AuthProvider, useSessionController } from "./AuthProvider";
import { LabProvider } from "./LabProvider";

export interface AppProvidersProps {
  children: ReactNode;
}

function FirebaseAnalyticsIdentity() {
  const { state } = useSessionController();
  const userId = state.data?.user.id ?? null;
  const labRole = state.data?.activeLabRole ?? null;

  useEffect(() => {
    if (state.status === "loading") return;
    void setFirebaseAnalyticsUser(userId, labRole);
  }, [labRole, state.status, userId]);

  return null;
}

export function AppProviders({ children }: AppProvidersProps) {
  const router = useRouter();
  const navigation = useMemo(
    () => createNavigationAdapter(router),
    [router],
  );

  useEffect(() => {
    void initializeFirebaseAnalytics();
  }, []);

  return (
    <ChatUIThemeProvider>
      <NavigationProvider adapter={navigation}>
        <AuthProvider>
          <FirebaseAnalyticsIdentity />
          <LabProvider>{children}</LabProvider>
        </AuthProvider>
      </NavigationProvider>
    </ChatUIThemeProvider>
  );
}
