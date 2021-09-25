import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { AuthLoginWithEmailAndPasswordProps } from '../../../contexts/Auth/types';
import { useAuth } from '../../../hooks/useAuth';
import { LoginView } from '../view';
import { LoginTypeConst } from './const';
import { changeLoginProps, handleLoginProps } from './types';

export const LoginContainer = () => {
    const history = useHistory();

    const [login, setLogin] = useState<AuthLoginWithEmailAndPasswordProps>({
        email: '',
        password: '',
    });

    const { user, loginInWihGoogle, loginInWihEmailAndPassword } = useAuth();

    const handleLogin = async (props: handleLoginProps) => {
        if (!user) {
            if (props.loginType === LoginTypeConst.GOOGLE) {
                await loginInWihGoogle();
            } else {
                await loginInWihEmailAndPassword(login);
            }
        }

        history.push('/');
    };

    const changeLogin = (loginVal: changeLoginProps) => {
        setLogin({
            ...login,
            [loginVal.key]: loginVal.value,
        });
    };

    const loginProps = {
        handleLogin,
        changeLogin,
    };

    return <LoginView {...loginProps} />;
};
