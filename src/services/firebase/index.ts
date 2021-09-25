import { firebase, auth } from './configs';
import { FirebaseServiceProps, loginWihEmailAndPasswordProps } from './types';

const FirebaseService = (): FirebaseServiceProps => {
    const loginInWihGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return await auth.signInWithPopup(provider);
    };

    const loginWihEmailAndPassword = async (
        props: loginWihEmailAndPasswordProps
    ) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(props.email, props.password)
            .catch((error) => {
                // Handle Errors here.
                throw new Error(
                    `Error Login with credential error.code: ${error.code} error.message: ${error.message}`
                );
            });
    };

    const signOut = async () => {
        return firebase
            .auth()
            .signOut()
            .catch((error) => {
                // An error happened.
                throw new Error(`Error logout user ${error.message}`);
            });
    };

    const createAccountUser = async (props: loginWihEmailAndPasswordProps) => {
        const created = await firebase
            .auth()
            .createUserWithEmailAndPassword(props.email, props.password)
            .catch((error) => {
                // Handle Errors here.
                throw new Error(
                    `Error Login with credential error.code: ${error.code} error.message: ${error.message}`
                );
            });

        return await created.user
            ?.updateProfile({ displayName: props.nickname })
            .catch((error) => {
                // Handle Errors here.
                throw new Error(
                    `Error Login with credential error.code: ${error.code} error.message: ${error.message}`
                );
            });
    };

    return {
        loginInWihGoogle,
        loginWihEmailAndPassword,
        signOut,
        createAccountUser,
    };
};

export { FirebaseService };
