import { IExpense } from '../interfaces/IExpense';
import { M } from '../models/M';

export class ExpensesUtil {
	public static getSummaryInPLN = (): number => {
		const expenses = M.store.getExpenses;
		const summaryValue = expenses.reduce((prevExpenseAmount: number, currentExpense: IExpense): number => {
			return prevExpenseAmount + currentExpense.amount;
		}, 0);

		return summaryValue;
	};
}
