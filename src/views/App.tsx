import React from 'react';
import { Global, css } from '@emotion/core';
import { GlobalStyles } from '../styles/global/GlobalStyles';
import AppWrapper from '../components/AppWrapper';

const App = () => {
	return (
		<div className='App'>
			<Global
				styles={css`
					${GlobalStyles}
				`}
			/>
			<AppWrapper>
				<header>
					<h1>List of expenses</h1>
					<div>
						<p>1 EUR = 4,382 PLN</p>
					</div>
				</header>

				<div>
					<form>
						<div>
							<label>Title of transaction</label>
							<input type='text' />
						</div>
						<div>
							<label>Amount (in PLN)</label>
							<input type='text' />
						</div>
						<button>ADD</button>
					</form>
				</div>

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
