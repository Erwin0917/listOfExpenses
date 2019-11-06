import { observable } from 'mobx';
import { IExpense } from '../interfaces/IExpense';

export class ExpensesListModel {
	@observable
	list: IExpense[] = [];
}
