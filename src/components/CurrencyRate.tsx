import { observer } from 'mobx-react';
import React from 'react';
import { M } from '../models/M';
import { CurrencyRateStyles } from '../styles/CurrencyRateStyles';

const CurrencyRate = observer(() => {
	return (
		<CurrencyRateStyles>
			<p>1 EUR = {M.store.currencyRate.PLN} PLN</p>
		</CurrencyRateStyles>
	);
});

export default CurrencyRate;
