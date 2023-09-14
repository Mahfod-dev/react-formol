import React, { createContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { ErrorStyleContext } from './ErrorStyleContext';

export const FormContext = createContext();

function Form({ defaultValues, children, onSubmit, defaultErrorStyle }) {
	const methods = useForm({ defaultValues });
	const handleSubmit = useCallback(
		async (data) => {
			await onSubmit(data);
			methods.reset();
		},
		[onSubmit, methods]
	);

	return (
		<FormContext.Provider value={{ ...methods }}>
			<ErrorStyleContext.Provider value={defaultErrorStyle}>
				<form onSubmit={methods.handleSubmit(handleSubmit)}>
					{children}
				</form>
			</ErrorStyleContext.Provider>
		</FormContext.Provider>
	);
}

Form.propTypes = {
	defaultValues: PropTypes?.object,
	children: PropTypes.node,
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
