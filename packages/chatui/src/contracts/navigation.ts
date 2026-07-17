export interface NavigationAdapter {
  push(href: string): void;
  replace(href: string): void;
  back(): void;
}
