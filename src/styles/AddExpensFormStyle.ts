import styled from '@emotion/styled';
import { MediaQuery } from './const/Media';
import { InputStyles } from './UI/InputStyles';

export const AddExpensFormStyles = styled.div`
	width: 100%;
	margin: 40px 0;
	padding: 0 20px;

	.addExpenseForm {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
`;

export const AddExpensInputStyles = styled(InputStyles)`
	width: 250px;

	${MediaQuery.PHONE} {
		margin: 10px 0;
	}
`;

export const LabelStyles = styled.label`
	font-size: 1.8rem;
	margin-right: 10px;
	font-weight: 600;
	min-width: 150px;
`;

export const InputWrapperStyles = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	margin: 20px 0;

	${MediaQuery.TABLET} {
		width: 100%;
		flex-wrap: wrap;
	}
`;
