import styled from '@emotion/styled';
import { ColorUtil } from '../utils/ColorUtil';
import { Color } from './const/Color';
import { MediaQuery } from './const/Media';

export const CurrencyRateStyles = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${ColorUtil.hexToRgba(Color.ACCENT_POSITIVE, 0.1)};
	color: ${Color.ACCENT_POSITIVE};
	font-weight: bold;
	padding: 10px;
	font-size: 2.5rem;
	border-radius: 4px;

	${MediaQuery.TABLET} {
		margin: 20px 0;
	}

	.currency__updatePanel {
		position: absolute;
		top: 100%;
		right: 0;
		border: 0;
		padding: 8px 15px;
		color: white;
		font-size: 1.4rem;
		font-weight: bold;
		background-color: ${Color.ACCENT_SECOND};
		opacity: 0.6;
		transition: opacity 0.2s ease-in-out;

		&:hover {
			opacity: 1;
		}
	}

	.CurrencyUpdatePanel {
		position: absolute;
		top: 100%;
		left: 0;
	}
`;
