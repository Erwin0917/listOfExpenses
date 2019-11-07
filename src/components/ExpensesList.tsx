import { observer } from 'mobx-react';
import React from 'react';
import ReactTable from 'react-table';
import { ExpensesActions } from '../actions/ExpensesActions';
import { IExpense } from '../interfaces/IExpense';
import { M } from '../models/M';
import { ExpensesListStyles } from '../styles/ExpensesListStyles';
import { TableStyles } from '../styles/TableStyles';
import { CurrencyUtil } from '../utils/CurrencyUtil';
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
		M.store.getExpenses.forEach(({ id, title, amount }: IExpense) => {
			const amountPln = parseFloat(amount.toFixed(2)).toString();
			const amountEur = parseFloat(CurrencyUtil.PLNtoEUR(amount).toFixed(2)).toString();
			const options = <ButtonRemove onClick={() => ExpensesActions.remove(id)}>Delete</ButtonRemove>;

			const espenseObject: Data = {
				id,
				title,
				amountPln,
				amountEur,
				options
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
