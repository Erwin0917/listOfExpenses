import styled from '@emotion/styled';
import { ColorUtil } from '../utils/ColorUtil';
import { Color } from './const/Color';
import { MediaQuery } from './const/Media';

export const CurrencyRateStyles = styled.div`
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
`;
