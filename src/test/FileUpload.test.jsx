import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUpload from '../../react-formol/src/FileUpload';
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

it('should display file name when a file is selected', async () => {
	const fileName = 'test-file.txt';
	const file = new File(['test'], fileName, { type: 'text/plain' });

	render(
		<WrapperComponent>
			<ErrorStyleContext.Provider value='error'>
				<FileUpload
					name='myFileUpload'
					label='My File Upload'
					id='myFileUploadId'
					type='file'
					validationOptions={{
						required: {
							value: true,
							message: 'Le fichier est requis',
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

	const inputElement = screen.getByLabelText(/My File Upload/i);
	expect(inputElement).not.toHaveAttribute('value');

	await act(async () => {
		await fireEvent.change(inputElement, { target: { files: [file] } });
	});

	expect(inputElement.files[0].name).toBe(fileName);
});

it('should display required error when no file is selected', async () => {
	render(
		<WrapperComponent>
			<ErrorStyleContext.Provider value='error'>
				<FileUpload
					name='myFileUpload'
					label='My File Upload'
					id='myFileUploadId'
					type='file'
					validationOptions={{
						required: {
							value: true,
							message: 'Le fichier est requis',
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

	const inputElement = screen.getByLabelText(/My File Upload/i);
	expect(inputElement).not.toHaveAttribute('value');

	await act(async () => {
		fireEvent.click(screen.getByText(/Submit/i));
	});

	expect(screen.queryByText(/Le champ est requis/i)).not.toBeInTheDocument();
});
