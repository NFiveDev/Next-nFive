'use client';

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ReduxStoreProvider from '@store/provider';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <ReduxStoreProvider>
          {children}
        </ReduxStoreProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}