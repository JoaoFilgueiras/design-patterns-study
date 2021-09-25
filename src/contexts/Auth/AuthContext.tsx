import { createContext, useEffect, useState } from 'react';
import { FirebaseService } from '../../services/firebase';
import { auth } from '../../services/firebase/configs';
import {
    AuthContextProviderProps,
    AuthContextType,
    AuthLoginWithEmailAndPasswordProps,
    CreateAccountProps,
    User,
} from './types';

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((us) => {
            if (!us) {
                throw new Error(
                    'Missing information from Google Authentication'
                );
            }

            const { displayName, photoURL, uid } = us;

            if (!uid || !displayName) {
                throw new Error(
                    'Missing information from Google Authentication'
                );
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const loginInWihGoogle = async () => {
        const res = await FirebaseService().loginInWihGoogle();

        if (res.user) {
            const { displayName, photoURL, uid } = res.user;

            if (!uid || !displayName) {
                throw new Error(
                    'Missing information from Google Authentication'
                );
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    };

    const loginInWihEmailAndPassword = async (
        props: AuthLoginWithEmailAndPasswordProps
    ) => {
        const res = await FirebaseService().loginWihEmailAndPassword(props);

        if (res.user) {
            const { displayName, photoURL, uid } = res.user;

            if (!uid || !displayName) {
                throw new Error('Missing information from Login with email');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            });
        }
    };

    const createAccount = async (props: CreateAccountProps) => {
        return await FirebaseService().createAccountUser(props);
    };

    const signOut = async () => {
        await FirebaseService().signOut();
        setUser(undefined);
        return;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loginInWihGoogle,
                loginInWihEmailAndPassword,
                createAccount,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };
