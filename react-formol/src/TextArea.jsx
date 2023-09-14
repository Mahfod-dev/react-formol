import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const TextArea = ({
	name,
	label,
	id,
	rows,
	cols,
	validationOptions,
	styleClasses,
}) => {
	const { register } = useContext(FormContext);

	const registerOptions = useMemo(() => {
		return { ...validationOptions };
	}, [validationOptions]);

	// Classe de base
	const baseClass = 'shadow appearance-none border rounded py-2 px-3';

	// Classes personnalisables
	const {
		width = 'w-full',
		size = 'text-base',
		color = 'text-gray-700',
		other = '',
	} = styleClasses || {};

	// Classe combinée
	const combinedClasses = `${baseClass} ${width} ${size} ${color} ${other}`;

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
				className={combinedClasses}></textarea>
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
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		width: PropTypes.string,
		size: PropTypes.string,
		color: PropTypes.string,
		other: PropTypes.string,
	}),
};

export default TextArea;
