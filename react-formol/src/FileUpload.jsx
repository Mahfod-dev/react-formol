import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const FileUpload = ({ name, label, id, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes par défaut
	const defaultDivClass = 'mb-4';
	const defaultInputClass =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';

	const {
		div: divClass = defaultDivClass,
		input: inputClass = defaultInputClass,
		label: labelClass = defaultLabelClass,
	} = styleClasses || {};

	return (
		<div className={divClass}>
			<label
				htmlFor={id}
				className={labelClass}>
				{label}
			</label>
			<input
				{...register(name, validationOptions)}
				type='file'
				id={id}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={validationOptions?.required ? 'true' : 'false'}
				className={inputClass}
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
		div: PropTypes.string,
		input: PropTypes.string,
		label: PropTypes.string,
	}),
};

export default FileUpload;
