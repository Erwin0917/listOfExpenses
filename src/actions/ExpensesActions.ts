import { action } from 'mobx';
import { M } from '../models/M';
import { StringUtil } from '../utils/StringUtil';
import { NotificationStatus } from './../const/NotificationStatus';
import { IExpense } from './../interfaces/IExpense';
import { NotificationsActions } from './NotificationsActions';

export class ExpensesActions {
	@action
	public static add = (title: string, amount: number) => {
		const id = StringUtil.createUUID();
		M.store.expenses.push({ id, title, amount });
		NotificationsActions.add(NotificationStatus.SUCCESS, 'Added', 'SUCCESS');
	};

	@action
	public static remove = (id: string) => {
		const newEspenses = M.store.expenses.filter((expense: IExpense) => expense.id !== id);
		M.store.expenses = newEspenses;
		NotificationsActions.add(NotificationStatus.SUCCESS, 'Removed', 'SUCCESS');
	};
}
