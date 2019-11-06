import { Color } from './../const/Color';
import { ResetStyles } from './ResetStyle';
import { css } from '@emotion/core';

export const GlobalStyles = css`
	${ResetStyles}

	@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,700,900&display=swap');

	html {
		font-family: 'Lato', sans-serif;
		font-size: 10px;
		background-color: ${Color.BACKGROUND_PAGE};
	}

	body {
		padding: 40px;
	}
`;
