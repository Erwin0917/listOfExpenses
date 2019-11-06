import { AppActions } from '../actions/AppActions';
import { AppStatus } from '../const/AppStatus';
import { ExpensesListModel } from '../models/ExpensesListModel';
import { M } from '../models/M';
import { App } from '../store/App';

export class AppInitializer {
	public static setup() {
		M.store = new ExpensesListModel();
		M.app = new App();
	}

	public static async init() {
		// fake sleep
		// await TranslationsManager.loadFromServer();
		// await FunctionUtil.sleep(2000);

		// let user = null;
		// try {
		// 	// user = await HttpApiActions.getUser();
		// 	// UserActions.setUser(user);
		// } catch (error) {
		// 	// localStorage.removeItem(Config.AUTH_TOKEN_NAME);
		// }

		AppActions.load(AppStatus.SUCCESS);
	}
}
