import React, { useContext, useMemo, useEffect, useState } from 'react';
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
	const {
		register,
		watch,
		formState: { errors },
	} = useContext(FormContext);
	const [isInvalid, setIsInvalid] = useState(false);

	useEffect(() => {
		setIsInvalid(!!errors[name]); // Mettre à jour 'isInvalid' en fonction de 'errors'
	}, [errors, name]);

	const watchField = watch(name);

	useEffect(() => {
		if (validationOptions?.required && !watchField) {
			setIsInvalid(true);
		} else {
			setIsInvalid(false);
		}
	}, [watchField, validationOptions]);

	const registerOptions = useMemo(() => {
		return { ...validationOptions };
	}, [validationOptions]);

	// Classes par défaut
	const defaultContainerClass = 'mb-4';
	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';
	const defaultTextAreaClass =
		'shadow appearance-none border rounded py-2 px-3';

	// Classes personnalisables
	const {
		container = defaultContainerClass,
		label: labelClass = defaultLabelClass,
		input: textAreaClass = defaultTextAreaClass,
	} = styleClasses || {};

	return (
		<div className={container}>
			<label
				htmlFor={id}
				className={labelClass}>
				{label}
			</label>
			<textarea
				{...register(name, registerOptions)}
				id={id}
				rows={rows}
				cols={cols}
				className={textAreaClass}
				aria-required={validationOptions?.required ? 'true' : 'false'}
				aria-label={label}
				aria-invalid={isInvalid ? 'true' : 'false'}
			/>
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
		container: PropTypes.string,
		label: PropTypes.string,
		input: PropTypes.string,
	}),
};

export default TextArea;

// import React, { useContext, useMemo } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';
// import ErrorMessage from './ErrorMessage';

// const TextArea = ({
// 	name,
// 	label,
// 	id,
// 	rows,
// 	cols,
// 	validationOptions,
// 	styleClasses,
// }) => {
// 	const { register } = useContext(FormContext);

// 	const registerOptions = useMemo(() => {
// 		return { ...validationOptions };
// 	}, [validationOptions]);

// 	// Classes par défaut
// 	const defaultContainerClass = 'mb-4';
// 	const defaultLabelClass = 'block text-gray-700 font-bold mb-2';
// 	const defaultTextAreaClass =
// 		'shadow appearance-none border rounded py-2 px-3';

// 	// Classes personnalisables
// 	const {
// 		container = defaultContainerClass,
// 		label: labelClass = defaultLabelClass,
// 		input: textAreaClass = defaultTextAreaClass,
// 	} = styleClasses || {};

// 	return (
// 		<div className={container}>
// 			<label
// 				htmlFor={id}
// 				className={labelClass}>
// 				{label}
// 			</label>
// 			<textarea
// 				{...register(name, registerOptions)}
// 				id={id}
// 				rows={rows}
// 				cols={cols}
// 				className={textAreaClass}
// 				aria-required={validationOptions?.required ? 'true' : 'false'}
// 				aria-label={label}
// 				aria-invalid={
// 					validationOptions?.required && !registerOptions?.value
// 						? 'true'
// 						: 'false'
// 				}
// 			/>
// 			<ErrorMessage name={name} />
// 		</div>
// 	);
// };

// TextArea.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 	rows: PropTypes.number,
// 	cols: PropTypes.number,
// 	validationOptions: PropTypes.object,
// 	styleClasses: PropTypes.shape({
// 		container: PropTypes.string,
// 		label: PropTypes.string,
// 		input: PropTypes.string,
// 	}),
// };

// export default TextArea;
