import { observable } from 'mobx';
import { AppStatus } from '../const/AppStatus';
import { IApp } from '../interfaces/IApp';

export class AppModel implements IApp {
	@observable
	public status: AppStatus = null;
}
