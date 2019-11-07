import { AppActions } from '../actions/AppActions';
import { AppStatus } from '../const/AppStatus';
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
