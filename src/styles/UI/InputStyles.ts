import styled from '@emotion/styled';
import { ColorUtil } from '../../utils/ColorUtil';
import { Color } from '../const/Color';

export const InputStyles = styled.input`
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight: 600;
	border: 1px solid ${ColorUtil.hexToRgba(Color.TEXT_DARK, 0.2)};
	padding: 5px 10px;
	border-radius: 4px;
	margin: 5px 10px;
	transition: border-color 0.2s ease-in-out;

	&:focus {
		border-color: ${Color.ACCENT_FIRST};
	}
`;
