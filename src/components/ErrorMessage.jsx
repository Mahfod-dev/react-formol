import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';

const ErrorMessage = ({ name }) => {
	const {
		formState: { errors },
	} = useContext(FormContext);

	return errors[name] ? (
		<p
			aria-live='polite'
			className='text-red-500 text-xs italic'>
			{errors[name].message}
		</p>
	) : null;
};

ErrorMessage.propTypes = {
	name: PropTypes.string.isRequired,
};

export default ErrorMessage;
