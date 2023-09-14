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

	return (
		<div className='my-container'>
			<h1 className='text-3xl mb-6 text-center'>React Formol</h1>
			<Form
				onSubmit={onSubmit}
				defaultValues={initialData}
				defaultErrorStyle='text-red-600 text-sm'
				styleClasses={{
					form: 'bg-white p-6 rounded-md shadow-md w-full',
				}}>
				<Input
					name='username'
					label='Username'
					id='username'
					type='text'
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
					validationOptions={{
						required: { value: true, message: 'Le nom est requis' },
					}}
				/>
				<Select
					name='mySelect'
					label='Choisissez une option'
					options={selectOptions}
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
				<TextArea
					name='message'
					label='Message'
					id='message'
					rows={4}
					cols={50}
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
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
				<Checkbox
					name='acceptTerms'
					label="J'accepte les conditions générales"
					id='termsCheckbox'
					styleClasses={{
						container: 'checkbox-container mb-5',
						label: 'checkbox-label',
						input: 'my-input',
					}}
				/>
				<FileUpload
					name='avatar'
					label='Avatar'
					id='avatar'
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
				<FileUpload
					name='file'
					label='Upload your file'
					id='file'
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
				<DatePicker
					name='date'
					label='Select a date'
					id='date'
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
				<Radio
					name='myRadio'
					label='Acceptez-vous les termes et conditions ?'
					id='acceptTandC'
					value='yes'
					styleClasses={{
						container: 'radio-container mb-5',
						label: 'radio-label',
						input: 'my-input',
					}}
				/>
				<ErrorMessage
					name='username'
					styleClasses={{
						container: 'mb-5',
						label: 'my-label',
						input: 'my-input',
					}}
				/>
				<Button
					type='submit'
					name='Envoyer'
					onClick={onSubmit}
					onSuccess={onSuccess}
					onError={onError}
					styleClasses={{
						button: 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded',
					}}
				/>
			</Form>
		</div>
	);
}

export default App;
