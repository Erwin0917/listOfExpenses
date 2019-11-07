import { MainStore } from '../store/MainStore';
import { AppModel } from './AppModel';
import { EnvironmentModel } from './EnvironmentModel';

export class M {
	public static env: EnvironmentModel;
	public static store: MainStore;
	public static app: AppModel;
	public static notifications: any;
}
