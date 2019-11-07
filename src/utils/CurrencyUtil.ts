import { M } from '../models/M';

export class CurrencyUtil {
	public static PLNtoEUR = (value: number): number => {
		const plnRate = M.store.currencyRate.PLN;
		if (!plnRate) return 0;

		return plnRate * value;
	};
}
