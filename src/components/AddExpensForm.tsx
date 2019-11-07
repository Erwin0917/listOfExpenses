import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { ExpensesActions } from '../actions/ExpensesActions';
import {
	AddExpensFormStyles,
	AddExpensInputStyles,
	InputWrapperStyles,
	LabelStyles
} from '../styles/AddExpensFormStyle';
import { ErrorMessageStyles } from '../styles/ErrorMessageStyle';
import Button from './UI/Button';

const titleInputName = 'title';
const amountInputName = 'amount';

const AddExpenseSchema = Yup.object().shape({
	[titleInputName]: Yup.string()
		.min(5, 'Too Short! Min 5 letters')
		.max(100, 'Too Long! Max 100 letters')
		.required('Required'),
	[amountInputName]: Yup.number().required('Required')
});

type FormProps = {
	[titleInputName]: string;
	[amountInputName]: string;
};

const AddExpensForm = () => {
	const handleSubmit = ({ title, amount }: FormProps, { resetForm }: any) => {
		amount = (+amount).toFixed(2);
		ExpensesActions.add(title, +amount);
		resetForm({});
	};
	return (
		<AddExpensFormStyles>
			<Formik
				initialValues={{ [titleInputName]: '', [amountInputName]: '' }}
				validationSchema={AddExpenseSchema}
				onSubmit={handleSubmit}>
				{({ values, errors, touched, handleChange, handleSubmit }) => (
					<form className='addExpenseForm' onSubmit={handleSubmit}>
						<InputWrapperStyles>
							<LabelStyles htmlFor={titleInputName}>Title of transaction</LabelStyles>
							<AddExpensInputStyles
								id={titleInputName}
								type={titleInputName}
								name={titleInputName}
								onChange={handleChange}
								value={values.title}
							/>
							{errors.title && touched.title ? <ErrorMessageStyles>{errors.title}</ErrorMessageStyles> : null}
						</InputWrapperStyles>
						<InputWrapperStyles>
							<LabelStyles htmlFor={amountInputName}>Amount (in PLN)</LabelStyles>
							<AddExpensInputStyles
								id={amountInputName}
								type={amountInputName}
								name={amountInputName}
								onChange={handleChange}
								value={values.amount}
							/>
							{errors.amount && touched.amount ? (
								<ErrorMessageStyles>{errors.amount}</ErrorMessageStyles>
							) : null}
						</InputWrapperStyles>
						<Button type='submit'>ADD</Button>
					</form>
				)}
			</Formik>
		</AddExpensFormStyles>
	);
};

export default AddExpensForm;
