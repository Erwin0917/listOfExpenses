import { observable } from 'mobx';

export class CurrencyModel {
	@observable
	public EUR: number = 1;
	@observable
	public PLN: number;
}
