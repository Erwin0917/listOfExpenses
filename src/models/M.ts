import { IApp } from '../interfaces/IApp';
import { MainStore } from '../store/MainStore';
import { EnvironmentModel } from './EnvironmentModel';

export class M {
	public static env: EnvironmentModel;
	public static store: MainStore;
	public static app: IApp;
}
