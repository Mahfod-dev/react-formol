import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../react-formol/src/Input';
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

describe('Input component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<Input
						name='myInput'
						label='My Input'
						id='myInputId'
						type='text'
						validationOptions={{
							required: {
								value: true,
								message: 'Le nom est requis',
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

		const inputElement = screen.getByLabelText(/My Input/i);

		expect(inputElement).toHaveAttribute('id', 'myInputId');
		expect(inputElement).toHaveAttribute('name', 'myInput');

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/my input/i), {
				target: { value: '' },
			});
		});

		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		expect(screen.getByText(/Le nom est requis/i)).toBeInTheDocument();

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/my input/i), {
				target: { value: 'test' },
			});
		});

		await act(async () => {
			expect(
				screen.queryByText(/Le nom est requis/i)
			).not.toBeInTheDocument();
		});
	});
});
