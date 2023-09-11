import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const DatePicker = ({ name, label, id, validationOptions }) => {
	const { register, unregister, setValue } = useContext(FormContext);

	useEffect(() => {
		register(name, validationOptions);
		return () => {
			unregister(name);
		};
	}, [register, unregister, name, validationOptions]);

	const handleChange = (e) => {
		setValue(name, e.target.value);
	};

	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className='block text-gray-700 font-bold mb-2'>
				{label}
			</label>
			<input
				type='date'
				id={id}
				name={name}
				onChange={handleChange}
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

DatePicker.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validationOptions: PropTypes?.object,
};

export default DatePicker;
