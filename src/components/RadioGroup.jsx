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

	// Classes personnalisables
	const {
		input = '',
		label: labelClass = '',
		fieldset = '',
		legend = '',
	} = styleClasses || {};

	return (
		<fieldset className={`mb-4 ${fieldset}`}>
			<legend className={`block text-gray-700 font-bold mb-2 ${legend}`}>
				{label}
			</legend>
			{options.map((option, index) => (
				<div
					key={index}
					className='flex items-center space-x-3'>
					<input
						type='radio'
						value={option.value}
						{...register(name, validationOptions)}
						id={`${name}_${index}`}
						className={`form-radio text-blue-500 h-5 w-5 ${input}`}
					/>
					<label
						htmlFor={`${name}_${index}`}
						className={`ml-2 text-gray-700 ${labelClass}`}>
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
		input: PropTypes.string,
		label: PropTypes.string,
		fieldset: PropTypes.string,
		legend: PropTypes.string,
	}),
};

export default RadioGroup;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';
// import ErrorMessage from './ErrorMessage';

// const RadioGroup = ({ name, label, options, validationOptions }) => {
// 	const { register } = useContext(FormContext);

// 	return (
// 		<fieldset className='mb-4'>
// 			<legend className='block text-gray-700 font-bold mb-2'>
// 				{label}
// 			</legend>
// 			{options.map((option, index) => (
// 				<div
// 					key={index}
// 					className='flex items-center space-x-3'>
// 					<input
// 						type='radio'
// 						value={option.value}
// 						{...register(name, validationOptions)}
// 						id={`${name}_${index}`}
// 						className='form-radio text-blue-500 h-5 w-5'
// 					/>
// 					<label
// 						htmlFor={`${name}_${index}`}
// 						className='ml-2 text-gray-700'>
// 						{option.label}
// 					</label>
// 				</div>
// 			))}
// 			<ErrorMessage name={name} />
// 		</fieldset>
// 	);
// };
// RadioGroup.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	options: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			value: PropTypes.oneOfType([
// 				PropTypes.string,
// 				PropTypes.number,
// 				PropTypes.bool,
// 			]).isRequired,
// 			label: PropTypes.string.isRequired,
// 		})
// 	).isRequired,
// 	validationOptions: PropTypes?.object,
// };

// export default RadioGroup;
