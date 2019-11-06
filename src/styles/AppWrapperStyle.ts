import styled from '@emotion/styled';
import { MediaQuery } from './const/Media';

export const AppWrapperStyle = styled.div`
	position: relative;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	max-width: 900px;
	padding: 40px;

	${MediaQuery.PHONE} {
		padding: 0;
	}
`;
