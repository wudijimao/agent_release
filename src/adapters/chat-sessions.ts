import type {
  CreateAgentSessionRequest,
  CreateAgentSessionResponse,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

export function createAgentSession(
  api: ApiClient,
  request: CreateAgentSessionRequest,
): Promise<CreateAgentSessionResponse> {
  return api.post<CreateAgentSessionResponse>("/api/chat/agent-sessions", request);
}
