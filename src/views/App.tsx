import { css, Global } from '@emotion/core';
import React from 'react';
import AddExpensForm from '../components/AddExpensForm';
import AppWrapper from '../components/AppWrapper';
import ExpensesList from '../components/ExpensesList';
import Header from '../components/Header';
import Summary from '../components/Summary';
import { GlobalStyles } from '../styles/global/GlobalStyles';

const App = () => {
	return (
		<div className='App'>
			<Global
				styles={css`
					${GlobalStyles}
				`}
			/>
			<AppWrapper>
				<Header />
				<AddExpensForm />
				<ExpensesList />
				<Summary />
			</AppWrapper>
		</div>
	);
};

export default App;
