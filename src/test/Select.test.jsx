import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../../react-formol/src/Input';
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

describe('Select component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		const selectOptions = [
			{ label: 'Option 1', value: 'option1' },
			{ label: 'Option 2', value: 'option2' },
			{ label: 'Option 3', value: 'option3' },
		];

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<Select
						id='mySelect'
						name='mySelect'
						label='Choisissez une option'
						options={selectOptions}
						styleClasses={{
							container: 'mb-5',
							label: 'my-label',
							input: 'my-input',
						}}
						validationOptions={{
							required: {
								value: true,
								message: 'Le champ est requis',
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

		const selectElement = screen.getByLabelText(/Choisissez une option/i);

		expect(selectElement).toBeInTheDocument();

		expect(selectElement).toHaveAttribute('id', 'mySelect');

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/Choisissez une option/i), {
				target: { value: '' },
			});
		});
		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		expect(screen.getByText(/Le champ est requis/i)).toBeInTheDocument();

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/Choisissez une option/i), {
				target: { value: 'option1' },
			});
		});

		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		expect(
			screen.queryByText(/Le champ est requis/i)
		).not.toBeInTheDocument();

		await act(async () => {
			fireEvent.change(screen.getByLabelText(/Choisissez une option/i), {
				target: { value: 'option2' },
			});
		});
		await act(async () => {
			fireEvent.click(screen.getByText(/Submit/i));
		});

		expect(
			screen.queryByText(/Le champ est requis/i)
		).not.toBeInTheDocument();
	});
});
