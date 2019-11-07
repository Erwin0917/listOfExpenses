import { observable } from 'mobx';

export class CurrencyModel {
	@observable
	public PLN = 1;
	@observable
	public EUR: number;
}
