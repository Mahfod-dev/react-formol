import {
	Input,
	TextArea,
	Form,
	Select,
	Button,
	RadioGroup,
	Radio,
	Checkbox,
	FileUpload,
	DatePicker,
	ErrorMessage,
} from '@react-formol';

function App() {
	const initialData = {
		age: 0,
		name: '',
		choice: 'Option 1',
		description: '',
		gender: '',
		acceptTerms: false,
		file: null,
	};

	const onSubmit = (data) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(data);
				resolve();
			}, 2000);
		});
	};

	const onSuccess = () => {
		console.log('Données soumises avec succès');
	};

	const onError = (error) => {
		console.log('Erreur lors de la soumission des données', error);
	};

	const selectOptions = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' },
	];

	const customStyles = {
		label: 'text-xl font-semibold',
		select: 'text-lg',
	};

	return (
		<Form
			onSubmit={onSubmit}
			defaultValues={initialData}
			defaultErrorStyle='text-red-600 text-sm'
			styleClasses={{
				form: 'bg-gray-100 p-4',
			}}>
			<Input
				name='username'
				label='Username'
				id='username'
				type='text'
				styleClasses={{
					container: 'mb-5',
					label: 'text-xl text-blue-500',
					input: 'border-blue-500',
				}}
			/>

			<Select
				name='mySelect'
				label='Choisissez une option'
				options={selectOptions}
				styleClasses={customStyles}
				validationOptions={{ required: 'Ce champ est requis' }}
			/>
			<TextArea
				styleClasses={{
					width: 'w-1/2',
					size: 'text-sm',
					color: 'text-blue-700',
					other: 'focus:border-blue-500',
				}}
				name='message'
				label='Message'
				id='message'
				rows={4}
				cols={50}
				validationOptions={{
					required: { value: true, message: 'Le message est requis' },
				}}
			/>

			<RadioGroup
				styleClasses={{
					input: 'h-4 w-4',
					label: 'text-xs',
					fieldset: 'border p-2',
					legend: 'text-lg',
				}}
				name='choice'
				label='Your choice'
				options={[
					{ value: 'yes', label: 'Yes' },
					{ value: 'no', label: 'No' },
				]}
				validationOptions={{
					required: { value: true, message: 'A choice is required' },
				}}
			/>

			<Checkbox
				name='acceptTerms'
				label="J'accepte les conditions générales"
				id='termsCheckbox'
				styleClasses={{
					input: 'custom-checkbox',
					label: 'custom-label',
					div: 'custom-div',
				}}
			/>
			<FileUpload
				name='avatar'
				label='Avatar'
				id='avatar'
				styleClasses={{
					input: 'custom-input',
					label: 'custom-label',
				}}
			/>

			<FileUpload
				styleClasses={{
					input: 'text-sm',
					label: 'text-lg',
					div: 'border p-4',
				}}
				name='file'
				label='Upload your file'
				id='file'
				validationOptions={{
					required: { value: true, message: 'File is required' },
				}}
			/>
			<DatePicker
				styleClasses={{
					input: 'text-sm',
					label: 'text-lg',
					div: 'border p-4',
				}}
				name='date'
				label='Select a date'
				id='date'
				validationOptions={{
					required: { value: true, message: 'Date is required' },
				}}
			/>

			<Radio
				name='myRadio'
				label='Acceptez-vous les termes et conditions ?'
				id='acceptTandC'
				value='yes'
				validationOptions={{ required: true }}
				styleClasses={{
					input: 'custom-radio',
					label: 'custom-label',
					div: 'custom-div',
				}}
			/>
			<ErrorMessage
				name='username'
				styleClasses={{
					paragraph: 'text-blue-600 text-sm bold',
				}}
			/>

			<Button
				type='button'
				name='Submit'
				onClick={() => console.log('Submitted')}
				styleClasses={{
					button: 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4',
				}}
			/>
			<Button
				type='button'
				name='Submit'
				onClick={() => console.log('Submitted')}
				styleClasses={{
					button: 'my-button',
				}}
			/>
		</Form>
	);
}

export default App;
