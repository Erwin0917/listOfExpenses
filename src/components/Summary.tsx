import { observer } from 'mobx-react';
import React from 'react';
import { SummaryStyles } from '../styles/Summary';
import { CurrencyUtil } from '../utils/CurrencyUtil';
import { ExpensesUtil } from '../utils/ExpensesUtil';

const Summary = observer(() => {
	const summaryPLN = ExpensesUtil.getSummaryInPLN();
	const summaryEUR = parseFloat(CurrencyUtil.PLNtoEUR(summaryPLN).toFixed(2));
	return (
		<SummaryStyles>
			<h2 className='Summary__title'>Summary:</h2>{' '}
			<p className='Summary__count'>
				{summaryPLN} PLN ({summaryEUR} EUR)
			</p>
		</SummaryStyles>
	);
});

export default Summary;
