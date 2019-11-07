import { action } from 'mobx';
import { Currency } from '../const/Currence';
import { NotificationStatus } from '../const/NotificationStatus';
import { M } from '../models/M';
import { HttpApiActions } from './HttpApiActions';
import { NotificationsActions } from './NotificationsActions';

export class CurrencyActions {
	@action
	public static setCurrencyValue = (currency: Currency, value: number) => {
		M.store.currencyRate[currency] = value;
		NotificationsActions.add(NotificationStatus.SUCCESS, 'Currency update', 'SUCCESS');
	};

	@action
	public static updateCurrencyFromApi = async () => {
		const currencies = await HttpApiActions.getAllCurrencyInfo();
		const currencyRate = currencies.rates.PLN;
		CurrencyActions.setCurrencyValue(Currency.PLN, currencyRate);
		NotificationsActions.add(NotificationStatus.SUCCESS, 'Currency update online', 'SUCCESS');
	};
}
