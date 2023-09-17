import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from '../../react-formol/src/RadioGroup';
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

describe('RadioGroup component', () => {
	it('should display required error when value is invalid', async () => {
		// Simule le rendu de votre composant React. Cette partie dépend des utilitaires de test de rendu de React que vous utilisez.

		render(
			<WrapperComponent>
				<ErrorStyleContext.Provider value='error'>
					<RadioGroup
						name='choice'
						label='Your choice'
						options={[
							{ value: 'yes', label: 'Yes' },
							{ value: 'no', label: 'No' },
						]}
						styleClasses={{
							container: 'radio-group-container mb-5',
							label: 'radio-group-label',
							input: 'my-input',
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

		const yesOption = screen.getByLabelText(/Yes/i);
		const noOption = screen.getByLabelText(/No/i);

		expect(yesOption).not.toBeChecked();
		expect(noOption).not.toBeChecked();

		fireEvent.click(yesOption);

		expect(yesOption).toBeChecked();
		expect(noOption).not.toBeChecked();

		await act(async () => {
			fireEvent.click(screen.getByText(/submit/i));
		});
	});
});
