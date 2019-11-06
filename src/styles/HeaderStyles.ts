import styled from '@emotion/styled';
import { MediaQuery } from './const/Media';

export const HeaderStyles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 20px 0;

	${MediaQuery.TABLET} {
		flex-direction: column;
		align-items: flex-start;
	}
`;
