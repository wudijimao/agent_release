import type { Page, Route } from "@playwright/test";

interface ErrorResponse {
  status: number;
  code: string;
  message: string;
}

function jsonBody(value: unknown) {
  return JSON.stringify(value);
}

export async function respondWithApiError(
  route: Route,
  { status, code, message }: ErrorResponse,
) {
  await route.fulfill({
    status,
    contentType: "application/json; charset=utf-8",
    body: jsonBody({
      error: {
        code,
        message,
        requestId: "visual-test-request",
      },
    }),
  });
}

export async function mockUnauthenticatedSession(page: Page) {
  await page.route("**/api/auth/me", (route) =>
    respondWithApiError(route, {
      status: 401,
      code: "UNAUTHORIZED",
      message: "Unauthorized",
    }),
  );
}

export async function mockSessionApiFailure(page: Page) {
  await page.route("**/api/auth/me", (route) =>
    respondWithApiError(route, {
      status: 503,
      code: "SESSION_SERVICE_UNAVAILABLE",
      message: "登录状态服务暂时不可用",
    }),
  );
}

export async function mockLoginApiFailure(page: Page) {
  await page.route("**/api/auth/login", (route) =>
    respondWithApiError(route, {
      status: 503,
      code: "AUTH_SERVICE_UNAVAILABLE",
      message: "Authentication service unavailable",
    }),
  );
}

export function createRequestGate() {
  let releaseRequest!: () => void;
  let markRequestCompleted!: () => void;
  const waiting = new Promise<void>((resolve) => {
    releaseRequest = resolve;
  });
  const requestCompleted = new Promise<void>((resolve) => {
    markRequestCompleted = resolve;
  });

  return {
    waiting,
    releaseRequest,
    requestCompleted,
    markRequestCompleted,
  };
}

export async function waitForVisualReady(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
}
