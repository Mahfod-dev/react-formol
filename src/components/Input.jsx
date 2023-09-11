import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Input = ({ name, label, id, type, validationOptions }) => {
	const { register } = useContext(FormContext);

	const registerOptions = useMemo(() => {
		const options = { ...validationOptions };
		if (type === 'number') {
			options.valueAsNumber = true;
		}
		return options;
	}, [type, validationOptions]);

	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className='block text-gray-700 font-bold mb-2'>
				{label}
			</label>
			<input
				{...register(name, registerOptions)}
				id={id}
				type={type}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={
					validationOptions?.required && !registerOptions?.value
						? 'true'
						: 'false'
				}
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
};

export default Input;
