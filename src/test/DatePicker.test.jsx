import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../../react-formol/src/DatePicker';
import Button from '../../react-formol/src/Button';
import { FormContext } from '../../react-formol/src/Form';
import { ErrorStyleContext } from '../../react-formol/src/ErrorStyleContext';
import { useForm } from 'react-hook-form';
import { act } from 'react-dom/test-utils';

function WrapperComponent({ children }) {
	const methods = useForm();
	return (
		<FormContext.Provider value={{ ...methods }}>
			<form
				onSubmit={methods.handleSubmit(async (data) => {
					return data;
				})}>
				{children}
			</form>
		</FormContext.Provider>
	);
}

describe('Date Picker component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<DatePicker
						name='myDatePicker'
						label='My Date Picker'
						id='myDatePickerId'
						type='text'
						validationOptions={{
							required: {
								value: true,
								message: 'La date est requise',
							},
						}}
					/>
					<Button
						type='submit'
						name='submit'
						onClick={async () => {
							await methods.handleSubmit(async (data) => {
								return data;
							})();
						}}>
						Submit
					</Button>
				</ErrorStyleContext.Provider>
			</WrapperComponent>
		);

		const inputElement = screen.getByLabelText(/My Date Picker/i);

		expect(inputElement).toHaveAttribute('id', 'myDatePickerId');
		expect(inputElement).toHaveAttribute('type', 'date');
		expect(inputElement).toHaveAttribute('name', 'myDatePicker');

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/my date picker/i), {
				target: { value: '' },
			});
		});
		await act(async () => {
			fireEvent.click(screen.getByText(/submit/i));
		});

		expect(screen.getByText(/La date est requise/i)).toBeInTheDocument();

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/my date picker/i), {
				target: { value: '2021-03-01' },
			});
		});
		await act(async () => {
			fireEvent.click(screen.getByText(/submit/i));
		});
		expect(
			screen.queryByText(/La data est requise/i)
		).not.toBeInTheDocument();
	});
});
