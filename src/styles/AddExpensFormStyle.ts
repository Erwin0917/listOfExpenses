import styled from '@emotion/styled';
import Input from '../components/UI/Input';

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

export const InputStyles = styled(Input)`
	width: 250px;
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
`;
