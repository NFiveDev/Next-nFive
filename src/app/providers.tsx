'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { themeContext } from './theme/themeProvider';
import {
  ColorModeScript,
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme/ColorMode';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <themeContext.Provider value={theme.config.initialColorMode}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </themeContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
