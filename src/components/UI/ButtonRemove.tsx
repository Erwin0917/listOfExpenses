import React, { ButtonHTMLAttributes } from 'react';
import { ButtonRemoveStyles } from '../../styles/UI/ButtonRemoveStyles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonRemove = (props: Props) => {
	return <ButtonRemoveStyles {...props}>{props.children}</ButtonRemoveStyles>;
};

export default ButtonRemove;
