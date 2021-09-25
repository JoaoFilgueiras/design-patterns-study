import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
    const { user, signOut } = useAuth();
    return (
        <>
            <h1>Welcome to {user?.name}</h1>
            <button onClick={() => signOut()}>Logout</button>
        </>
    );
};
