import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Select = ({
	name,
	options,
	label,
	id,
	validationOptions,
	styleClasses,
}) => {
	const { register } = useContext(FormContext);

	const baseClass = 'shadow appearance-none border rounded py-2 px-3';

	const {
		width = 'w-full',
		size = 'text-base',
		color = 'text-gray-700',
		other = '',
	} = styleClasses || {};

	const combinedClasses = `${baseClass} ${width} ${size} ${color} ${other}`;

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
				className={combinedClasses}>
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
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		width: PropTypes.string,
		size: PropTypes.string,
		color: PropTypes.string,
		other: PropTypes.string,
	}),
};

export default Select;
