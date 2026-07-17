import React from 'react';
import type { NavigationAdapter } from '../contracts';
export interface NavigationProviderProps<TChildren = unknown> {
    adapter: NavigationAdapter;
    children: TChildren;
}
export declare function NavigationProvider<TChildren>({ adapter, children, }: NavigationProviderProps<TChildren>): React.JSX.Element;
export declare function useNavigation(): NavigationAdapter;
//# sourceMappingURL=NavigationProvider.d.ts.map