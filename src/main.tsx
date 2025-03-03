import '@/styles/index.css';
import '@/styles/fonts.css';

import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
