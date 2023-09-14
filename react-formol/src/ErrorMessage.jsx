import React, { useContext } from 'react';
import { FormContext } from './Form';
import { ErrorStyleContext } from './ErrorStyleContext';
import PropTypes from 'prop-types';

const ErrorMessage = ({ name, styleClasses }) => {
	const {
		formState: { errors },
	} = useContext(FormContext);

	// Style par défaut ou fourni par ErrorStyleContext
	const defaultErrorStyle =
		useContext(ErrorStyleContext) || 'text-red-500 text-xs italic';

	// Classe personnalisable
	const errorClass = styleClasses?.error || defaultErrorStyle;

	return errors[name] ? (
		<p
			aria-live='polite'
			className={errorClass}>
			{errors[name].message}
		</p>
	) : null;
};

ErrorMessage.propTypes = {
	name: PropTypes.string.isRequired,
	styleClasses: PropTypes.shape({
		error: PropTypes.string,
	}),
};

export default ErrorMessage;
