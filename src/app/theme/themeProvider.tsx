import { createContext, useContext } from 'react';

type ITheme = {
  mode: 'light' | 'dark'
}

const theme : ITheme = {
  mode: 'light'
}

export const themeContext = createContext(theme);