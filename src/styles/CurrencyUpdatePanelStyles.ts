import styled from '@emotion/styled';
import { Color } from './const/Color';

export const CurrencyUpdatePanelStyles = styled.div`
	padding: 10px;
	width: 100%;
	background-color: ${Color.BACKGROUND_LIGHT};

	#amount {
		width: 100%;
		margin: 0;
	}

	.updateCurrencyForm {
		margin: 10px 0;
		border: 1px solid ${Color.ACCENT_SECOND};
		padding: 2px;
		border-radius: 4px;

		button {
			background-color: ${Color.ACCENT_SECOND};
		}
	}
`;
