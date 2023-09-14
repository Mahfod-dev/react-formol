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
