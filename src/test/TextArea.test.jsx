import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TextArea from '../../react-formol/src/TextArea';
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

describe('TextArea component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<TextArea
						name='myTextArea'
						label='My Text Area'
						id='myTextAreaId'
						type='text'
						validationOptions={{
							required: {
								value: true,
								message: 'Le texte est requis',
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

		const inputElement = screen.getByLabelText(/My Text Area/i);

		expect(inputElement).toHaveAttribute('id', 'myTextAreaId');

		expect(inputElement).toHaveAttribute('name', 'myTextArea');

		// Act
		await act(async () => {
			fireEvent.change(inputElement, {
				target: {
					value: '',
				},
			});
		});

		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		// Assert
		await waitFor(() => {
			expect(inputElement).toHaveAttribute('aria-invalid', 'true');
		});
		expect(screen.getByText('Le texte est requis')).toBeInTheDocument();

		// Act
		await act(async () => {
			fireEvent.change(inputElement, {
				target: {
					value: 'test',
				},
			});
		});

		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		// Assert

		await waitFor(() => {
			expect(inputElement).toHaveAttribute('aria-invalid', 'false');
		});
		expect(
			screen.queryByText('Le texte est requis')
		).not.toBeInTheDocument();
	});
});
