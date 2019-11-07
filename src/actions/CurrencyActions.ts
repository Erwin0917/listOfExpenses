import { action } from 'mobx';
import { Currency } from '../const/Currence';
import { M } from '../models/M';
import { HttpApiActions } from './HttpApiActions';

export class CurrencyActions {
	@action
	public static setCurrencyValue = (currency: Currency, value: number) => {
		M.store.currencyRate[currency] = value;
	};

	@action
	public static updateCurrencyFromApi = async () => {
		const currencies = await HttpApiActions.getAllCurrencyInfo();
		CurrencyActions.setCurrencyValue(Currency.PLN, currencies.rates.PLN);
	};
}
