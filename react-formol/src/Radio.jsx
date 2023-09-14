import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Radio = ({ name, label, id, value, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes par défaut
	const defaultDivClass = 'mb-4';
	const defaultInputClass = 'form-radio text-blue-500 h-5 w-5';
	const defaultLabelClass = 'ml-2 text-gray-700';

	// Classes personnalisables
	const {
		div: divClass = defaultDivClass,
		input: inputClass = defaultInputClass,
		label: labelClass = defaultLabelClass,
	} = styleClasses || {};

	return (
		<div className={divClass}>
			<input
				type='radio'
				id={id}
				value={value}
				{...register(name, validationOptions)}
				className={inputClass}
			/>
			<label
				htmlFor={id}
				className={labelClass}>
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
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool,
	]).isRequired,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		div: PropTypes.string,
		input: PropTypes.string,
		label: PropTypes.string,
	}),
};

export default Radio;
