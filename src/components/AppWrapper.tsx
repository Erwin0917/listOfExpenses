import React from 'react';
import { AppWrapperStyle } from '../styles/AppWrapperStyle';

type Props = {
	children: JSX.Element[] | JSX.Element;
};

const AppWrapper = ({ children }: Props) => {
	return <AppWrapperStyle>{children}</AppWrapperStyle>;
};

export default AppWrapper;
