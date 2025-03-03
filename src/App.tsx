import { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import AppRouter from './components/AppRouter/AppRouter';
import { ThemeContext } from './components/ThemeProvider/ThemeProvider';
import { lightTheme } from './styles/theme';

export type Theme = typeof lightTheme;

function App() {
    const { themeState } = useContext(ThemeContext);

    return (
        <>
            <StyledThemeProvider theme={themeState}>
                <AppRouter />
            </StyledThemeProvider>
        </>
    );
}

export default App;
