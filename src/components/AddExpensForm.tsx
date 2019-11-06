import { Formik } from 'formik';
import React from 'react';
import { AddExpensFormStyles, InputWrapperStyles, LabelStyles } from '../styles/AddExpensFormStyle';
import { InputStyles } from '../styles/UI/InputStyles';

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
