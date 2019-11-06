import { IApp } from '../interfaces/IApp';
import { ExpensesListModel } from './ExpensesListModel';

export class M {
	public static store = new ExpensesListModel();
	public static app: IApp = null;
}
