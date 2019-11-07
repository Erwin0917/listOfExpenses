import { AppActions } from '../actions/AppActions';
import { CurrencyActions } from '../actions/CurrencyActions';
import { AppStatus } from '../const/AppStatus';
import { Currency } from '../const/Currence';
import { NotificationStatus } from '../const/NotificationStatus';
import { AppModel } from '../models/AppModel';
import { EnvironmentModel } from '../models/EnvironmentModel';
import { M } from '../models/M';
import { MainStore } from '../store/MainStore';
import { NotificationsActions } from './../actions/NotificationsActions';

declare global {
	interface Window {
		M: any;
	}
}
export class AppInitializer {
	public static setup() {
		M.env = new EnvironmentModel();
		M.store = new MainStore();
		M.app = new AppModel();

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
			NotificationsActions.add(NotificationStatus.ERROR, 'Currency update online was failed', 'ERROR');
		}

		AppActions.load(AppStatus.SUCCESS);
	}
}
