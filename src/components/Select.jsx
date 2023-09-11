import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Select = ({ name, options, label, id, validationOptions }) => {
	const { register } = useContext(FormContext);

	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className='block text-gray-700 font-bold mb-2'>
				{label}
			</label>
			<select
				{...register(name, validationOptions)}
				id={id}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
				{options.map((option) => (
					<option
						key={option}
						value={option}>
						{option}
					</option>
				))}
			</select>
			<ErrorMessage name={name} />
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validationOptions: PropTypes?.object,
};

export default Select;
