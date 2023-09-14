import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Checkbox = ({ name, label, id, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes personnalisables
	const { input = '', label: labelClass = '', div = '' } = styleClasses || {};

	return (
		<div className={`mb-4 ${div}`}>
			<input
				type='checkbox'
				id={id}
				{...register(name, validationOptions)}
				className={`${input}`}
			/>
			<label
				htmlFor={id}
				className={`ml-2 ${labelClass}`}>
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
	styleClasses: PropTypes?.shape({
		input: PropTypes.string,
		label: PropTypes.string,
		div: PropTypes.string,
	}),
};

export default Checkbox;
