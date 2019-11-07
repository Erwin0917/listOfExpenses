import { observer } from 'mobx-react';
import React from 'react';
import ReactTable from 'react-table';
import { ExpensesActions } from '../actions/ExpensesActions';
import { IExpense } from '../interfaces/IExpense';
import { M } from '../models/M';
import { ExpensesListStyles } from '../styles/ExpensesListStyles';
import { TableStyles } from '../styles/TableStyles';
import ButtonRemove from './UI/ButtonRemove';

type Data = {
	id: string;
	title: string;
	amountPln: string;
	amountEur: string;
	options: JSX.Element;
};

const columns = [
	{
		Header: 'Expenses',
		columns: [
			{
				Header: 'Title',
				accessor: 'title'
			},
			{
				Header: 'Amount (PLN)',
				accessor: 'amountPln'
			},
			{
				Header: 'Amount (EUR)',
				accessor: 'amountEur'
			},
			{
				Header: 'Options',
				accessor: 'options',
				className: 'options__column'
			}
		]
	}
];

const ExpensesList = observer(() => {
	const generateData = () => {
		const data: Data[] = [];
		M.store.getExpenses.map(({ id, title, amount }: IExpense) => {
			const espenseObject: Data = {
				id,
				title,
				amountPln: amount.toString(),
				amountEur: '20',
				options: <ButtonRemove onClick={() => ExpensesActions.remove(id)}>Delete</ButtonRemove>
			};

			data.push(espenseObject);
		});

		return data;
	};
	return (
		<ExpensesListStyles>
			<TableStyles>
				<ReactTable data={generateData()} columns={columns} defaultPageSize={10} />
			</TableStyles>
		</ExpensesListStyles>
	);
});

export default ExpensesList;
