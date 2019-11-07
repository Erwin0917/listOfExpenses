import { css, Global } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import NotificationSystem from 'react-notification-system';
import AddExpensForm from '../components/AddExpensForm';
import AppWrapper from '../components/AppWrapper';
import ExpensesList from '../components/ExpensesList';
import Header from '../components/Header';
import Summary from '../components/Summary';
import { M } from '../models/M';
import { GlobalStyles } from '../styles/global/GlobalStyles';

const App = () => {
	const notificationSystem = useRef();

	useEffect(() => {
		M.notifications = notificationSystem.current as any;
	});

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
			<NotificationSystem ref={notificationSystem} />
		</div>
	);
};

export default App;
