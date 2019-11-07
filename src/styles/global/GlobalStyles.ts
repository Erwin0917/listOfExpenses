import { css } from '@emotion/core';
import { Color } from './../const/Color';
import { ResetStyles } from './ResetStyle';

export const GlobalStyles = css`
	${ResetStyles}

	@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,700,900&display=swap');

	html {
		font-family: 'Lato', sans-serif;
		font-size: 10px;
		background-color: ${Color.BACKGROUND_PAGE};
		color: ${Color.TEXT_DARK};
	}

	body {
		padding: 40px;
	}

	.notification: before {
		display: none;
	}
`;
