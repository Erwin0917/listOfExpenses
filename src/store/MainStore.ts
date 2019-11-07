import { computed, observable, toJS } from 'mobx';
import { IExpense } from '../interfaces/IExpense';
import { CurrencyModel } from '../models/CurrencyModel';

export class MainStore {
	@observable
	expenses: IExpense[] = [];
	currencyRate = new CurrencyModel();

	@computed
	get getExpenses() {
		return toJS(this.expenses);
	}

	@computed
	get getCurrencyRate() {
		return toJS(this.currencyRate);
	}
}
