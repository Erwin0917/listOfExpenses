import { AppActions } from '../actions/AppActions';
import { CurrencyActions } from '../actions/CurrencyActions';
import { AppStatus } from '../const/AppStatus';
import { Currency } from '../const/Currence';
import { EnvironmentModel } from '../models/EnvironmentModel';
import { M } from '../models/M';
import { App } from '../store/App';
import { MainStore } from '../store/MainStore';

declare global {
	interface Window {
		M: any;
	}
}
export class AppInitializer {
	public static setup() {
		M.env = new EnvironmentModel();
		M.store = new MainStore();
		M.app = new App();

		if (M.env.isDev) {
			window.M = M;
		}
	}

	public static async init() {
		try {
			await CurrencyActions.updateCurrencyFromApi();
		} catch (error) {
			CurrencyActions.setCurrencyValue(Currency.PLN, 4.382);
			console.log('Currencies download fail');
		}

		AppActions.load(AppStatus.SUCCESS);
	}
}
