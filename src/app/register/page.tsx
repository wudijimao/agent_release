import { resolveLoginDestination } from "@/lib/auth/login-redirect";

import { RegisterRoute } from "./RegisterRoute";

export interface RegisterPageProps {
  searchParams: Promise<{
    mode?: string | string[];
    next?: string | string[];
  }>;
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const { mode, next } = await searchParams;
  return (
    <RegisterRoute
      destination={resolveLoginDestination(next)}
      mode={mode === "create-lab" ? "create-lab" : "join-lab"}
    />
  );
}
