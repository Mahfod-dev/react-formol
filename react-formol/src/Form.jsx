import React, { createContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { ErrorStyleContext } from './ErrorStyleContext';

export const FormContext = createContext();

function Form({
	defaultValues,
	children,
	onSubmit,
	styleClasses,
	defaultErrorStyle,
}) {
	const methods = useForm({ defaultValues });
	const handleSubmit = useCallback(
		async (data) => {
			await onSubmit(data);
			methods.reset();
		},
		[onSubmit, methods]
	);

	// Classes personnalisables
	const { form = '' } = styleClasses || {};

	return (
		<FormContext.Provider value={{ ...methods }}>
			<ErrorStyleContext.Provider value={defaultErrorStyle}>
				<form
					onSubmit={methods.handleSubmit(handleSubmit)}
					className={`${form}`}>
					{children}
				</form>
			</ErrorStyleContext.Provider>
		</FormContext.Provider>
	);
}

Form.propTypes = {
	defaultValues: PropTypes.object,
	children: PropTypes.node,
	onSubmit: PropTypes.func.isRequired,
	styleClasses: PropTypes.shape({
		form: PropTypes.string,
	}),
	defaultErrorStyle: PropTypes.string,
};

export default Form;
