import { HttpApi } from './../styles/const/HttpApi';

export class HttpApiActions {
	public static getAllCurrencyInfo = async () => {
		const response = await fetch(HttpApi.ALL_CURRENCIES_URL);
		const data = await response.json();
		return data;
	};
}
