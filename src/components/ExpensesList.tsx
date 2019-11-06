import React from 'react';
import ReactTable from 'react-table';
import { ExpensesListStyles } from '../styles/ExpensesListStyles';
import { TableStyles } from '../styles/TableStyles';

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

const data = [
	{
		title: 'New book about Rust',
		amountPln: 100,
		amountEur: 22.82,
		options: <button>Delete</button>
	},
	{
		title: 'Snacks for a football match',
		amountPln: 20,
		amountEur: 4.82,
		options: <button>Delete</button>
	},
	{
		title: 'Bus ticket',
		amountPln: 2.55,
		amountEur: 0.44,
		options: <button>Delete</button>
	}
];

const ExpensesList = () => {
	return (
		<ExpensesListStyles>
			<TableStyles>
				<ReactTable data={data} columns={columns} defaultPageSize={10} />
			</TableStyles>
		</ExpensesListStyles>
	);
};

export default ExpensesList;
