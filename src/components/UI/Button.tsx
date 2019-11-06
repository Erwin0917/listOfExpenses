import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyles } from '../../styles/UI/ButtonStyles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
	return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

export default Button;
