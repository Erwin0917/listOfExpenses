import styled from '@emotion/styled';
import { Formik } from 'formik';
import React from 'react';
import Input from './Input';

const AddExpensFormStyles = styled.div`
	width: 100%;
	margin: 40px 0;

	.addExpenseForm {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
`;

const InputStyles = styled(Input)`
	width: 250px;
`;

const LabelStyles = styled.label`
	font-size: 1.8rem;
	margin-right: 10px;
	font-weight: 600;
	min-width: 150px;
`;

const InputWrapperStyles = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const AddExpensForm = () => {
	const titleInputName = 'title';
	const amountInputnae = 'amount';

	return (
		<AddExpensFormStyles>
			<Formik
				initialValues={{ title: '', amount: '' }}
				validate={values => {
					const errors = {};
					// if (!values.email) {
					// 	errors.email = 'Required';
					// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					// 	errors.email = 'Invalid email address';
					// }
					return errors;
				}}
				onSubmit={values => {}}>
				{({ values, errors, touched, handleChange, handleSubmit }) => (
					<form className='addExpenseForm' onSubmit={handleSubmit}>
						<InputWrapperStyles>
							<LabelStyles htmlFor={titleInputName}>Title of transaction</LabelStyles>
							<InputStyles
								id={titleInputName}
								type={titleInputName}
								name={titleInputName}
								onChange={handleChange}
								value={values.title}
							/>
							{errors.title && touched.title && errors.title}
						</InputWrapperStyles>
						<InputWrapperStyles>
							<LabelStyles htmlFor={amountInputnae}>Amount (in PLN)</LabelStyles>
							<InputStyles
								id={amountInputnae}
								type={amountInputnae}
								name={amountInputnae}
								onChange={handleChange}
								value={values.amount}
							/>
							{errors.amount && touched.amount && errors.amount}
							<button type='submit'>ADD</button>
						</InputWrapperStyles>
					</form>
				)}
			</Formik>
		</AddExpensFormStyles>
	);
};

export default AddExpensForm;
