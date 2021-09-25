import { type } from 'os';
import { ReactNode } from 'react';

export type User = {
    id: string;
    name: string;
    avatar: string | null;
};

export type AuthContextType = {
    user: User | undefined;
    loginInWihGoogle: () => Promise<void>;
    loginInWihEmailAndPassword: (
        props: AuthLoginWithEmailAndPasswordProps
    ) => Promise<void>;
    createAccount: (props: CreateAccountProps) => Promise<void>;
    signOut: () => Promise<void>;
};

export type AuthContextProviderProps = {
    children: ReactNode;
};

export type AuthLoginWithEmailAndPasswordProps = {
    email: string;
    password: string;
};

export type CreateAccountProps = {
    email: string;
    password: string;
    confirmPassword?: string;
    nickname: string;
};
