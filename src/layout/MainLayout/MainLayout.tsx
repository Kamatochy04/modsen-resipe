import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary, Footer, Header, Loader } from '@/components';
import { MainContainer } from '@/styles/mainContainer';

export function MainLayout() {
    return (
        <>
            <Header />

            <MainContainer>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </MainContainer>

            <Footer />
        </>
    );
}
