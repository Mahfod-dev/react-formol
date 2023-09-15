import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from '../../react-formol/src/Radio';
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
					<Radio
						name='myRadio'
						label='Acceptez-vous les termes et conditions ?'
						id='acceptTandC'
						value='yes'
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

		const radioElement = screen.getByLabelText(
			/Acceptez-vous les termes et conditions ?/i
		);

		expect(radioElement).toHaveAttribute('id', 'acceptTandC');
		expect(radioElement).toHaveAttribute('name', 'myRadio');

		await act(async () => {
			fireEvent.click(screen.getByText(/submit/i));
		});

		expect(screen.getByText(/Le nom est requis/i)).toBeDefined();
	});
});
