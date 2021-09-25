import { firebase } from './configs';

export type loginWihEmailAndPasswordProps = {
    email: string;
    password: string;
    nickname?: string;
};

export type FirebaseServiceProps = {
    loginInWihGoogle: () => Promise<firebase.auth.UserCredential>;
    loginWihEmailAndPassword: (
        props: loginWihEmailAndPasswordProps
    ) => Promise<firebase.auth.UserCredential>;
    signOut: () => Promise<void>;
    createAccountUser: (props: loginWihEmailAndPasswordProps) => Promise<void>;
};
