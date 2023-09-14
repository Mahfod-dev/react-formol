import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Input = ({ name, label, id, type, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	const registerOptions = useMemo(() => {
		const options = { ...validationOptions };
		if (type === 'number') {
			options.valueAsNumber = true;
		}
		return options;
	}, [type, validationOptions]);

	// Classes par défaut
	const defaultContainerClass = 'mb-4';
	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';
	const defaultInputClass = 'shadow appearance-none border rounded py-2 px-3';

	const {
		container = defaultContainerClass,
		label: labelClass = defaultLabelClass,
		input: inputClass = defaultInputClass,
	} = styleClasses || {};

	return (
		<div className={container}>
			<label
				htmlFor={id}
				className={labelClass}>
				{label}
			</label>
			<input
				{...register(name, registerOptions)}
				id={id}
				type={type}
				className={inputClass}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={
					validationOptions?.required && !registerOptions?.value
						? 'true'
						: 'false'
				}
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		container: PropTypes.string,
		label: PropTypes.string,
		input: PropTypes.string,
	}),
};

export default Input;
