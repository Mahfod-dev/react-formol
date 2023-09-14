import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';

const Button = ({ type, name, onClick, onSuccess, onError, styleClasses }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		formState: { isValid },
	} = useContext(FormContext);

	const handleClick = async () => {
		if (!isValid) return;

		setIsLoading(true);
		try {
			await onClick();
			if (onSuccess) {
				onSuccess();
			}
		} catch (error) {
			if (onError) {
				onError(error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const buttonClass =
		styleClasses?.button ||
		'bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ml-auto';

	return (
		<button
			type={type}
			onClick={handleClick}
			aria-disabled={!isValid ? 'true' : 'false'}
			className={`${buttonClass} ${
				!isValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''
			}`}>
			{isLoading ? 'Chargement...' : name}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string?.isRequired,
	onClick: PropTypes.func?.isRequired,
	onSuccess: PropTypes?.func,
	onError: PropTypes?.func,
	styleClasses: PropTypes?.shape({
		button: PropTypes.string,
	}),
};

export default Button;
