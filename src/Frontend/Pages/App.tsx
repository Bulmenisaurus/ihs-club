import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LandingPage } from './LandingPage';
import { CreatePage } from './CreatePage';
import { ClubPage } from './ClubPage';

const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/create', element: <CreatePage /> },
    { path: '/club/:id', element: <ClubPage /> },
]);

export const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};
