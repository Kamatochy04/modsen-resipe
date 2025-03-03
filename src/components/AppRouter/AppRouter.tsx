import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/layout';
import { routes } from '@/utils/navigates/routs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} index={route.index} />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
