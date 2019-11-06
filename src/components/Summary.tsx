import React from 'react';
import { SummaryStyles } from '../styles/Summary';

const Summary = () => {
	return (
		<SummaryStyles>
			<h2 className='Summary__title'>Summary:</h2> <p className='Summary__count'>122.55 PLN (27.96 EUR)</p>
		</SummaryStyles>
	);
};

export default Summary;
