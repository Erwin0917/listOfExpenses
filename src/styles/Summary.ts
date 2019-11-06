import styled from '@emotion/styled';
import { Color } from './const/Color';

export const SummaryStyles = styled.div`
	background-color: ${Color.ACCENT_SECOND};
	border-radius: 4px;
	padding: 10px 15px;
	margin: 20px 0;
	color: white;
	font-size: 1.8rem;
	font-weight: bold;

	.Summary__title {
		margin-bottom: 10px;
	}

	.Summary__count {
	}
`;
