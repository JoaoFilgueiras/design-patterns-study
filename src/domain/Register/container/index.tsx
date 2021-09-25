import { useState } from 'react';
import { useHistory } from 'react-router';
import { CreateAccountProps } from '../../../contexts/Auth/types';
import { useAuth } from '../../../hooks/useAuth';
import { RegisterView } from '../view';
import { changeAccountProps } from './types';

export const RegisterContainer = () => {
    const history = useHistory();

    const [account, setAccount] = useState<CreateAccountProps>({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
    });

    const { user, createAccount, loginInWihEmailAndPassword } = useAuth();

    const handleCreateAccount = async () => {
        if (!user) {
            await createAccount(account);
            await loginInWihEmailAndPassword(account);
        }
        console.log(user);

        history.push('/');
    };

    const changeAccount = (loginVal: changeAccountProps) => {
        setAccount({
            ...account,
            [loginVal.key]: loginVal.value,
        });
    };

    const registerProps = {
        handleCreateAccount,
        changeAccount,
    };

    return <RegisterView {...registerProps} />;
};
