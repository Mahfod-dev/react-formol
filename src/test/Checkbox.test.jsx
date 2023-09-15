import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from '../../react-formol/src/CheckBox';
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
					<CheckBox
						name='acceptTerms'
						label="J'accepte les conditions générales"
						id='termsCheckbox'
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
						}}>
						Submit
					</Button>
				</ErrorStyleContext.Provider>
			</WrapperComponent>
		);

		await act(async () => {
			fireEvent.click(screen.getByText(/submit/i));
		});

		// Vérifie que le message d'erreur est bien affiché
		expect(screen.getByText(/Le nom est requis/i)).toBeInTheDocument();

		// Verifie que la checkbox est bien affichée
		expect(
			screen.getByText(/J'accepte les conditions générales/i)
		).toBeInTheDocument();

		// Verifie que la checkbox est bien cliquable
		expect(
			screen.getByText(/J'accepte les conditions générales/i)
		).toBeEnabled();
	});
});
