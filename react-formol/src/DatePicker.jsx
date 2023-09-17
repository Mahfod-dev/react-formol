import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const DatePicker = ({ name, label, id, validationOptions, styleClasses }) => {
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

	const defaultInputClass =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';
	const defaultDivClass = 'mb-4';

	const {
		input = defaultInputClass,
		label: labelClass = defaultLabelClass,
		div = defaultDivClass,
	} = styleClasses || {};

	return (
		<div className={div}>
			<label
				htmlFor={id}
				className={labelClass}>
				{label}
			</label>
			<input
				type='date'
				id={id}
				name={name}
				onChange={handleChange}
				className={input}
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

DatePicker.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		input: PropTypes.string,
		label: PropTypes.string,
		div: PropTypes.string,
	}),
};

export default DatePicker;
