import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Select = ({ name, label, options, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes par défaut
	const defaultContainerClass = 'mb-4';
	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';
	const defaultSelectClass =
		'shadow appearance-none border rounded py-2 px-3';

	// Classes personnalisables
	const {
		container = defaultContainerClass,
		label: labelClass = defaultLabelClass,
		select: selectClass = defaultSelectClass,
	} = styleClasses || {};

	return (
		<div className={container}>
			<label
				htmlFor={name}
				className={labelClass}>
				{label}
			</label>
			<select
				id={name}
				{...register(name, validationOptions)}
				className={selectClass}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={
					validationOptions?.required &&
					!register(name, validationOptions)?.value
						? 'true'
						: 'false'
				}>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<ErrorMessage name={name} />
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		container: PropTypes.string,
		label: PropTypes.string,
		select: PropTypes.string,
	}),
};

export default Select;
