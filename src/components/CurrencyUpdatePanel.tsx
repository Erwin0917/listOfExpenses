import { Formik } from 'formik';
import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { CurrencyActions } from '../actions/CurrencyActions';
import { Currency } from '../const/Currence';
import { M } from '../models/M';
import { AddExpensInputStyles } from '../styles/AddExpensFormStyle';
import { CurrencyUpdatePanelStyles } from '../styles/CurrencyUpdatePanelStyles';
import { ErrorMessageStyles } from '../styles/ErrorMessageStyle';
import Button from './UI/Button';

const ChangeRateSchema = Yup.object().shape({
	amount: Yup.number().required('Required')
});

type Props = {
	onUpdateHandler: () => void;
	onClickOutOfPanel: () => void;
};

const CurrencyUpdatePanel = observer((props: Props) => {
	const initialPLNValue = M.store.currencyRate.PLN;
	const refUpdatePanel = useRef();

	useEffect(() => {
		window.addEventListener('click', outsideClickListener);

		return () => window.removeEventListener('click', outsideClickListener);
	});

	const outsideClickListener = (event: Event) => {
		const element = refUpdatePanel.current as HTMLElement;
		const target = event.target as HTMLElement;

		if (!element.contains(target)) {
			props.onClickOutOfPanel();
		}
	};

	const handleManuallyUpdate = (values: any) => {
		CurrencyActions.setCurrencyValue(Currency.PLN, values.amount);
		props.onUpdateHandler();
	};
	const handleUpdateFromInternet = async () => {
		await CurrencyActions.updateCurrencyFromApi();
		props.onUpdateHandler();
	};

	return (
		<CurrencyUpdatePanelStyles className='CurrencyUpdatePanel' ref={refUpdatePanel}>
			<Formik
				enableReinitialize={true}
				initialValues={{ amount: initialPLNValue }}
				validationSchema={ChangeRateSchema}
				onSubmit={handleManuallyUpdate}>
				{({ values, errors, touched, handleChange, handleSubmit }) => (
					<form className='updateCurrencyForm' onSubmit={handleSubmit}>
						<AddExpensInputStyles
							id='amount'
							type='amount'
							name='amount'
							onChange={handleChange}
							value={values.amount}
						/>
						{errors.amount && touched.amount ? (
							<ErrorMessageStyles>{errors.amount}</ErrorMessageStyles>
						) : null}

						<Button type='submit'>Update manually</Button>
					</form>
				)}
			</Formik>
			<Button onClick={handleUpdateFromInternet}>Update from internet</Button>
		</CurrencyUpdatePanelStyles>
	);
});

export default CurrencyUpdatePanel;
