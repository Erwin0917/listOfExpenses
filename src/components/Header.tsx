import React from 'react';
import AppTitle from './AppTitle';
import CurrencyRate from './CurrencyRate';
import styled from '@emotion/styled';

const HeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 20px 0;
`;

const Header = () => {
	return (
		<HeaderStyles>
			<AppTitle />
			<CurrencyRate />
		</HeaderStyles>
	);
};

export default Header;
