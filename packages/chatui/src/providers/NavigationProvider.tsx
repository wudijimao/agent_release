import React, { createContext, useContext, type ReactNode } from 'react';

import type { NavigationAdapter } from '../contracts';

const NavigationContext = createContext<NavigationAdapter | null>(null);

export interface NavigationProviderProps<TChildren = unknown> {
  adapter: NavigationAdapter;
  children: TChildren;
}

export function NavigationProvider<TChildren>({
  adapter,
  children,
}: NavigationProviderProps<TChildren>) {
  return (
    <NavigationContext.Provider value={adapter}>
      {children as ReactNode}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const adapter = useContext(NavigationContext);
  if (!adapter) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }

  return adapter;
}
