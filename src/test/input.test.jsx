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
					console.log('data', data);
				})}>
				{children}
			</form>
		</FormContext.Provider>
	);
}

describe('App component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<Input
						name='test'
						label='Test'
						id='test'
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
								console.log('data', data);
							})();
							// Votre logique personnalisée ici
						}}>
						Submit
					</Button>
				</ErrorStyleContext.Provider>
			</WrapperComponent>
		);

		// Interagit avec l'élément
		await act(async () => {
			fireEvent.change(screen.getByLabelText(/test/i), {
				target: { value: '' },
			});
		});

		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		// Effectue une assertion sur l'état de l'élément

		screen.debug();

		expect(screen.getByText(/Le nom est requis/i)).toBeInTheDocument();

		// fireEvent.change(screen.getByLabelText(/test/i), {
		// 	target: { value: 'test' },
		// });

		// expect(screen.queryByText(/Le nom est requis/i)).not.toBeInTheDocument();

		// fireEvent.change(screen.getByLabelText(/test/i), {
		// 	target: { value: '' },
		// });

		// expect(screen.getByText(/Le nom est requis/i)).toBeInTheDocument();

		// fireEvent.change(screen.getByLabelText(/test/i), {
		// 	target: { value: 'test' },
		// });

		// expect(screen.queryByText(/Le nom est requis/i)).not.toBeInTheDocument();
	});
});
