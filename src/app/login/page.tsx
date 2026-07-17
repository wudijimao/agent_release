import { resolveLoginDestination } from "@/lib/auth/login-redirect";

import { LoginRoute } from "./LoginRoute";

export interface LoginPageProps {
  searchParams: Promise<{ next?: string | string[] }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next } = await searchParams;
  return <LoginRoute destination={resolveLoginDestination(next)} />;
}
