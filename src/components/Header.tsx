import React from 'react';
import { HeaderStyles } from '../styles/HeaderStyles';
import AppTitle from './AppTitle';
import CurrencyRate from './CurrencyRate';

const Header = () => {
	return (
		<HeaderStyles>
			<AppTitle />
			<CurrencyRate />
		</HeaderStyles>
	);
};

export default Header;
