import styled from '@emotion/styled';
import React from 'react';
import { Color } from '../styles/const/Color';
import { ColorUtil } from '../utils/ColorUtil';

const InputStyles = styled.input`
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight: 600;
	border: 1px solid ${ColorUtil.hexToRgba(Color.TEXT_DARK, 0.2)};
	padding: 5px 10px;
	border-radius: 4px;
	margin: 5px 10px;
`;

const Input = (props: any) => {
	return <InputStyles {...props} />;
};

export default Input;
