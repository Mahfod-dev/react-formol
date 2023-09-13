import { useContext } from 'react';
import { FormContext } from './Form';
import { ErrorStyleContext } from './ErrorStyleContext';

const ErrorMessage = ({ name }) => {
	const {
		formState: { errors },
	} = useContext(FormContext);

	const errorStyle =
		useContext(ErrorStyleContext) || 'text-red-500 text-xs italic';

	return errors[name] ? (
		<p
			aria-live='polite'
			className={errorStyle}>
			{errors[name].message}
		</p>
	) : null;
};

export default ErrorMessage;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';

// const ErrorMessage = ({ name, styleClasses }) => {
// 	const {
// 		formState: { errors },
// 	} = useContext(FormContext);

// 	// Classe personnalisable pour le paragraphe
// 	const paragraphClass =
// 		styleClasses?.paragraph || 'text-red-500 text-xs italic';

// 	return errors[name] ? (
// 		<p
// 			aria-live='polite'
// 			className={paragraphClass}>
// 			{errors[name].message}
// 		</p>
// 	) : null;
// };

// ErrorMessage.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	styleClasses: PropTypes.shape({
// 		paragraph: PropTypes.string,
// 	}),
// };

// export default ErrorMessage;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FormContext } from './Form';

// const ErrorMessage = ({ name }) => {
// 	const {
// 		formState: { errors },
// 	} = useContext(FormContext);

// 	return errors[name] ? (
// 		<p
// 			aria-live='polite'
// 			className='text-red-500 text-xs italic'>
// 			{errors[name].message}
// 		</p>
// 	) : null;
// };

// ErrorMessage.propTypes = {
// 	name: PropTypes.string.isRequired,
// };

// export default ErrorMessage;
