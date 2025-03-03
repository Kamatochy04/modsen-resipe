import { createContext, useEffect, useState } from 'react';

import { Theme } from '@/App';
import { darkTheme, lightTheme } from '@/styles/theme';

interface ThemeContextType {
    themeState: Theme;
    toggleTheme: () => void;
}

const THEME_KEY = 'app-theme';

export const ThemeContext = createContext<ThemeContextType>({
    themeState: lightTheme,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeState, setThemeState] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        return savedTheme === 'dark' ? darkTheme : lightTheme;
    });

    const toggleTheme = () => {
        setThemeState((prevTheme) => {
            const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
            localStorage.setItem(THEME_KEY, newTheme === darkTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            setThemeState(savedTheme === 'dark' ? darkTheme : lightTheme);
        }
    }, []);

    return <ThemeContext.Provider value={{ themeState, toggleTheme }}>{children}</ThemeContext.Provider>;
}
