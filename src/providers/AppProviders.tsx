"use client";

import { NavigationProvider } from "@bioagent/chatui";
import { useRouter } from "next/navigation";
import { useMemo, type ReactNode } from "react";

import { createNavigationAdapter } from "@/adapters/navigation";

import { AuthProvider } from "./AuthProvider";
import { LabProvider } from "./LabProvider";

export interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const router = useRouter();
  const navigation = useMemo(
    () => createNavigationAdapter(router),
    [router],
  );

  return (
    <NavigationProvider adapter={navigation}>
      <AuthProvider>
        <LabProvider>{children}</LabProvider>
      </AuthProvider>
    </NavigationProvider>
  );
}
