import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';
import ErrorMessage from './ErrorMessage';

const Radio = ({ name, label, id, value, validationOptions, styleClasses }) => {
	const { register } = useContext(FormContext);

	// Classes personnalisables
	const { input = '', label: labelClass = '', div = '' } = styleClasses || {};

	return (
		<div className={`mb-4 ${div}`}>
			<input
				type='radio'
				id={id}
				value={value}
				{...register(name, validationOptions)}
				className={`form-radio text-blue-500 h-5 w-5 ${input}`}
			/>
			<label
				htmlFor={id}
				className={`ml-2 text-gray-700 ${labelClass}`}>
				{label}
			</label>
			<ErrorMessage name={name} />
		</div>
	);
};

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	validationOptions: PropTypes.object,
	styleClasses: PropTypes.shape({
		input: PropTypes.string,
		label: PropTypes.string,
		div: PropTypes.string,
	}),
};

export default Radio;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';
// import ErrorMessage from './ErrorMessage';

// const Radio = ({ name, label, id, value, validationOptions }) => {
// 	const { register } = useContext(FormContext);

// 	return (
// 		<div className='mb-4'>
// 			<input
// 				type='radio'
// 				id={id}
// 				value={value}
// 				{...register(name, validationOptions)}
// 			/>
// 			<label
// 				htmlFor={id}
// 				className='ml-2'>
// 				{label}
// 			</label>
// 			<ErrorMessage name={name} />
// 		</div>
// 	);
// };

// Radio.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 	value: PropTypes.string.isRequired,
// 	validationOptions: PropTypes?.object,
// };

// export default Radio;
