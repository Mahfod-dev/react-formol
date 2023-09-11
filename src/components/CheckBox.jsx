import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Checkbox = ({ name, label, id, validationOptions }) => {
	const { register } = useContext(FormContext);

	return (
		<div className='mb-4'>
			<input
				type='checkbox'
				id={id}
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

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validationOptions: PropTypes?.object,
};

export default Checkbox;
