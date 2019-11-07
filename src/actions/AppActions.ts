import { action } from 'mobx';
import { AppStatus } from '../const/AppStatus';
import { M } from '../models/M';

export class AppActions {
	@action
	public static load(status: AppStatus) {
		M.app.status = status;
	}
}
