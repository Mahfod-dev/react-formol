import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const RadioGroup = ({
	name,
	label,
	options,
	validationOptions,
	styleClasses,
}) => {
	const { register } = useContext(FormContext);

	// Classes par défaut
	const defaultFieldsetClass = 'mb-4';
	const defaultLegendClass = 'block text-gray-700 font-bold mb-2';
	const defaultInputClass = 'form-radio text-blue-500 h-5 w-5';
	const defaultLabelClass = 'ml-2 text-gray-700';

	// Classes personnalisables
	const {
		fieldset: fieldsetClass = defaultFieldsetClass,
		legend: legendClass = defaultLegendClass,
		input: inputClass = defaultInputClass,
		label: labelClass = defaultLabelClass,
	} = styleClasses || {};

	return (
		<fieldset className={fieldsetClass}>
			<legend className={legendClass}>{label}</legend>
			{options.map((option, index) => (
				<div
					key={index}
					className='flex items-center space-x-3'>
					<input
						type='radio'
						value={option.value}
						{...register(name, validationOptions)}
						id={`${name}_${index}`}
						className={inputClass}
					/>
					<label
						htmlFor={`${name}_${index}`}
						className={labelClass}>
						{option.label}
					</label>
				</div>
			))}
			<ErrorMessage name={name} />
		</fieldset>
	);
};

RadioGroup.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
				PropTypes.bool,
			]).isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		fieldset: PropTypes.string,
		legend: PropTypes.string,
		input: PropTypes.string,
		label: PropTypes.string,
	}),
};

export default RadioGroup;
