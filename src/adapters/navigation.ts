import type { NavigationAdapter } from "@bioagent/chatui";

export interface NextRouterPort {
  push(href: string): void;
  replace(href: string): void;
  back(): void;
}

export function createNavigationAdapter(
  router: NextRouterPort,
): NavigationAdapter {
  return {
    push: (href) => router.push(href),
    replace: (href) => router.replace(href),
    back: () => router.back(),
  };
}
