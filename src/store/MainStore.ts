import { observable } from 'mobx';
import { IExpense } from '../interfaces/IExpense';
import { CurrencyModel } from '../models/CurrencyModel';

export class MainStore {
	@observable
	expenses: IExpense[] = [];
	currencyRate = new CurrencyModel();
}
