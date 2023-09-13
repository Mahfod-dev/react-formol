import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const FileUpload = ({ name, label, id, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes personnalisables
	const { input = '', label: labelClass = '', div = '' } = styleClasses || {};

	return (
		<div className={`mb-4 ${div}`}>
			<label
				htmlFor={id}
				className={`block text-gray-700 font-bold mb-2 ${labelClass}`}>
				{label}
			</label>
			<input
				{...register(name, validationOptions)}
				type='file'
				id={id}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={validationOptions?.required ? 'true' : 'false'}
				className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${input}`}
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

FileUpload.propTypes = {
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

export default FileUpload;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';
// import ErrorMessage from './ErrorMessage';

// const FileUpload = ({ name, label, id, validationOptions }) => {
// 	const { register } = useContext(FormContext);

// 	return (
// 		<div className='mb-4'>
// 			<label
// 				htmlFor={id}
// 				className='block text-gray-700 font-bold mb-2'>
// 				{label}
// 			</label>
// 			<input
// 				{...register(name, validationOptions)}
// 				type='file'
// 				id={id}
// 				aria-required={validationOptions?.required ? 'true' : 'false'}
// 				aria-label={label}
// 				aria-invalid={validationOptions?.required ? 'true' : 'false'}
// 				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 			/>
// 			<ErrorMessage name={name} />
// 		</div>
// 	);
// };

// FileUpload.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 	validationOptions: PropTypes?.object,
// };

// export default FileUpload;
