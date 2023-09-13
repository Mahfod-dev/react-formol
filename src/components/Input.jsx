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
				className={combinedClasses}
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
		width: PropTypes?.string,
		size: PropTypes?.string,
		color: PropTypes?.string,
		other: PropTypes?.string,
	}),
};

export default Input;

// import React, { useContext, useMemo } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';
// import ErrorMessage from './ErrorMessage';

// const Input = ({ name, label, id, type, validationOptions }) => {
// 	const { register } = useContext(FormContext);

// 	const registerOptions = useMemo(() => {
// 		const options = { ...validationOptions };
// 		if (type === 'number') {
// 			options.valueAsNumber = true;
// 		}
// 		return options;
// 	}, [type, validationOptions]);

// 	return (
// 		<div className='mb-4'>
// 			<label
// 				htmlFor={id}
// 				className='block text-gray-700 font-bold mb-2'>
// 				{label}
// 			</label>
// 			<input
// 				{...register(name, registerOptions)}
// 				id={id}
// 				type={type}
// 				aria-required={validationOptions?.required ? 'true' : 'false'}
// 				aria-label={label}
// 				aria-invalid={
// 					validationOptions?.required && !registerOptions?.value
// 						? 'true'
// 						: 'false'
// 				}
// 				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 			/>
// 			<ErrorMessage name={name} />
// 		</div>
// 	);
// };

// Input.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 	type: PropTypes.string,
// 	validationOptions: PropTypes.object,
// };

// export default Input;
