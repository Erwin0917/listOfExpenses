import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { M } from '../models/M';
import { CurrencyRateStyles } from '../styles/CurrencyRateStyles';
import CurrencyUpdatePanel from './CurrencyUpdatePanel';

const CurrencyRate = observer(() => {
	const [isUpdated, changeUpdateStatus] = useState(true);

	return (
		<CurrencyRateStyles>
			<p>1 EUR = {M.store.currencyRate.PLN} PLN</p>
			<button className='currency__updatePanel' onClick={() => changeUpdateStatus(!isUpdated)}>
				Update
			</button>
			{isUpdated && <CurrencyUpdatePanel onUpdateHandler={() => changeUpdateStatus(false)} />}
		</CurrencyRateStyles>
	);
});

export default CurrencyRate;
