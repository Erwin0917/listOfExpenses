import { css, Global } from '@emotion/core';
import React from 'react';
import AddExpensForm from '../components/AddExpensForm';
import AppWrapper from '../components/AppWrapper';
import Header from '../components/Header';
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

				<table>
					<thead>
						<tr>
							<td>Title</td>
							<td>Amount(PLN)</td>
							<td>Amount(EUR)</td>
							<td>Options</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>New book about Rust</td>
							<td>100</td>
							<td>22.82</td>
							<td>Delete</td>
						</tr>
						<tr>
							<td>Snacks for a football match</td>
							<td>20</td>
							<td>4.56</td>
							<td>Delete</td>
						</tr>
						<tr>
							<td>Bus ticket</td>
							<td>2.55</td>
							<td>0.58</td>
							<td>Delete</td>
						</tr>
					</tbody>
				</table>
			</AppWrapper>
		</div>
	);
};

export default App;
