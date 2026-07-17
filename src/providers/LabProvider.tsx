"use client";

import type {
  CurrentUserResponse,
  LabRole,
  SetActiveLabRequest,
  SetActiveLabResponse,
} from "@bioagent/shared";
import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";

import { useSessionController } from "./AuthProvider";
import { authenticatedSessionState } from "./session-state";

export interface LabContextValue {
  labs: CurrentUserResponse["labs"];
  activeLab: CurrentUserResponse["activeLab"];
  activeLabRole: LabRole | null;
  setActiveLab(labId: string): Promise<void>;
}

const LabContext = createContext<LabContextValue | null>(null);

export function LabProvider({ children }: { children: ReactNode }) {
  const { state, setState, api, refreshSession } = useSessionController();

  const setActiveLab = useCallback(
    async (labId: string) => {
      const request: SetActiveLabRequest = { labId };
      const response = await api.post<SetActiveLabResponse>(
        "/api/auth/active-lab",
        request,
      );

      if (!state.data) {
        await refreshSession();
        return;
      }

      setState(
        authenticatedSessionState({
          ...state.data,
          activeLab: response.activeLab,
          activeLabRole: response.activeLabRole,
        }),
      );
    },
    [api, refreshSession, setState, state.data],
  );

  const value = useMemo<LabContextValue>(
    () => ({
      labs: state.data?.labs ?? [],
      activeLab: state.data?.activeLab ?? null,
      activeLabRole: state.data?.activeLabRole ?? null,
      setActiveLab,
    }),
    [setActiveLab, state.data?.activeLab, state.data?.activeLabRole, state.data?.labs],
  );

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
}

export function useLab() {
  const value = useContext(LabContext);
  if (!value) throw new Error("useLab must be used within LabProvider");
  return value;
}
