import { createContext, useContext, ReactNode } from 'react';
import { useColorMode } from '@/components/ui/color-mode';

interface ThemeContextValue {
  toggleColorMode: () => void;
  colorMode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const value: ThemeContextValue = {
    colorMode: colorMode as 'light' | 'dark',
    toggleColorMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
