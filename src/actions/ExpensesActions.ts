import { M } from '../models/M';
import { StringUtil } from '../utils/StringUtil';
import { IExpense } from './../interfaces/IExpense';

export class ExpensesActions {
	public static add = (title: string, amount: number) => {
		const id = StringUtil.createUUID();
		M.store.expenses.push({ id, title, amount });
	};

	public static remove = (id: string) => {
		M.store.expenses.filter((expense: IExpense) => expense.id !== id);
	};
}
