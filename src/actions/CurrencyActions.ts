import { action } from 'mobx';
import { Currency } from '../const/Currence';
import { M } from '../models/M';

export class CurrencyActions {
	@action
	public static setCurrencyValue = (currency: Currency, value: number) => {
		M.store.currencyRate[currency] = value;
	};
}
