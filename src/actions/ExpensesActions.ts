import { action } from 'mobx';
import { M } from '../models/M';
import { StringUtil } from '../utils/StringUtil';
import { IExpense } from './../interfaces/IExpense';

export class ExpensesActions {
	@action
	public static add = (title: string, amount: number) => {
		const id = StringUtil.createUUID();
		M.store.expenses.push({ id, title, amount });
	};

	@action
	public static remove = (id: string) => {
		const newEspenses = M.store.expenses.filter((expense: IExpense) => expense.id !== id);
		M.store.expenses = newEspenses;
	};
}
