import React from 'react';
import { Routes } from './routes/routes';

import './App.scss';
import { AuthContextProvider } from './contexts/Auth/AuthContext';

function App() {
    return (
        <AuthContextProvider>
            <Routes />
        </AuthContextProvider>
    );
}

export default App;
