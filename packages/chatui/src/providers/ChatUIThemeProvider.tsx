import React, { type ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { chatUIAntdSeedToken } from '../generated/antdTheme';

export interface ChatUIThemeProviderProps {
  children: ReactNode;
}

export function ChatUIThemeProvider({ children }: ChatUIThemeProviderProps) {
  return <ConfigProvider theme={{ token: chatUIAntdSeedToken }}>{children}</ConfigProvider>;
}
