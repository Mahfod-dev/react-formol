import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Radio = ({ name, label, id, value, validationOptions }) => {
	const { register } = useContext(FormContext);

	return (
		<div className='mb-4'>
			<input
				type='radio'
				id={id}
				value={value}
				{...register(name, validationOptions)}
			/>
			<label
				htmlFor={id}
				className='ml-2'>
				{label}
			</label>
			<ErrorMessage name={name} />
		</div>
	);
};

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	validationOptions: PropTypes?.object,
};

export default Radio;
