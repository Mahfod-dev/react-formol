import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Checkbox = ({ name, label, id, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	const defaultInputClass = '';
	const defaultLabelClass = 'ml-2';
	const defaultDivClass = 'mb-4';

	const {
		input = defaultInputClass,
		label: labelClass = defaultLabelClass,
		div = defaultDivClass,
	} = styleClasses || {};

	return (
		<div className={div}>
			<input
				type='checkbox'
				id={id}
				{...register(name, validationOptions)}
				className={input}
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

Checkbox.propTypes = {
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

export default Checkbox;
