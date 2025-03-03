/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

import { Theme } from '@/App';
import { darkTheme, lightTheme } from '@/styles/theme';

interface ThemeContextType {
    themeState: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    themeState: lightTheme,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeState, setThemeState] = useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setThemeState((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return <ThemeContext.Provider value={{ themeState, toggleTheme }}>{children}</ThemeContext.Provider>;
}
