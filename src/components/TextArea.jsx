import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const TextArea = ({ name, label, id, rows, cols, validationOptions }) => {
	const { register } = useContext(FormContext);

	const registerOptions = useMemo(() => {
		return { ...validationOptions };
	}, [validationOptions]);

	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className='block text-gray-700 font-bold mb-2'>
				{label}
			</label>
			<textarea
				{...register(name, registerOptions)}
				id={id}
				rows={rows}
				cols={cols}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={
					validationOptions?.required && !registerOptions?.value
						? 'true'
						: 'false'
				}
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></textarea>
			<ErrorMessage name={name} />
		</div>
	);
};

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	rows: PropTypes.number,
	cols: PropTypes.number,
	validationOptions: PropTypes?.object,
};

export default TextArea;
