import { Button as ButtonBSB } from 'react-bootstrap';
import { ButtonType } from './types';

import './style.scss';

export const Button = (props: ButtonType) => {
    return <ButtonBSB {...props} />;
};
