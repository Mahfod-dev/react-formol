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
} from './components';

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

	return (
		<Form
			onSubmit={onSubmit}
			defaultValues={initialData}
			defaultErrorStyle='text-red-600 text-sm'>
			<Input
				name='name'
				label='Name'
				id='name'
				type='text'
				validationOptions={{
					required: { value: true, message: 'Le nom est requis' },
				}}
				styleClasses={{
					width: 'w-1/2',
					size: 'text-lg',
					color: 'text-blue-700',
					other: 'focus:border-blue-500',
				}}
			/>

			<Input
				name='age'
				label='Age'
				id='age'
				type='number'
				validationOptions={{
					required: { value: true, message: "L'âge est requis" },
					min: { value: 1, message: "L'âge doit être au moins de 1" },
					max: {
						value: 150,
						message: "L'âge doit être au maximum de 150",
					},
				}}
				styleClasses={{
					other: 'focus:border-green-500',
				}}
			/>
			<Input
				name='name'
				label='Name'
				id='name'
				type='text'
				validationOptions={{
					required: { value: true, message: 'Le nom est requis' },
				}}
			/>

			<Select
				styleClasses={{
					width: 'w-1/3',
					size: 'text-lg',
					color: 'text-red-700',
					other: 'focus:border-red-500',
				}}
				name='gender'
				options={['Male', 'Female']}
				label='Gender'
				id='gender'
				validationOptions={{ required: true }}
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
				styleClasses={{
					input: 'h-4 w-4',
					label: 'text-xs',
					div: 'border p-2',
				}}
				name='subscribe'
				label='Subscribe to newsletter'
				id='subscribe'
				validationOptions={{
					required: {
						value: true,
						message: 'Subscription is required',
					},
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
				styleClasses={{
					input: 'text-red-500 h-6 w-6',
					label: 'text-xl',
					div: 'border p-2',
				}}
				name='gender'
				label='Male'
				id='male'
				value='male'
				validationOptions={{
					required: { value: true, message: 'Gender is required' },
				}}
			/>
			<ErrorMessage
				name='username'
				styleClasses={{
					paragraph: 'text-blue-600 text-sm bold',
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
	);
}

export default App;

// import { Input, TextArea, Form, Select, Button } from './components';

// function App() {
// 	const initialData = {
// 		age: 0,
// 		name: '',
// 		choice: 'Option 1',
// 		description: '',
// 	};

// 	const onSubmit = (data) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				console.log(data);
// 				resolve();
// 			}, 2000);
// 		});
// 	};

// 	const onSuccess = () => {
// 		console.log('Données soumises avec succès');
// 	};

// 	const onError = (error) => {
// 		console.log('Erreur lors de la soumission des données', error);
// 	};

// 	return (
// 		<Form
// 			onSubmit={onSubmit}
// 			defaultValues={initialData}>
// 			<Input
// 				name='name'
// 				label='Name'
// 				id='name'
// 				type='text'
// 				validationOptions={{
// 					required: { value: true, message: 'Le nom est requis' },
// 				}}
// 			/>
// 			<Input
// 				name='age'
// 				label='Age'
// 				id='age'
// 				type='number'
// 				validationOptions={{
// 					required: { value: true, message: "L'âge est requis" },
// 					min: { value: 1, message: "L'âge doit être au moins de 1" },
// 					max: {
// 						value: 150,
// 						message: "L'âge doit être au maximum de 150",
// 					},
// 				}}
// 			/>
// 			<Select
// 				name='choice'
// 				label='Choice'
// 				id='choice'
// 				options={['Option 1', 'Option 2', 'Option 3']}
// 			/>
// 			<TextArea
// 				name='description'
// 				label='Description'
// 				id='description'
// 				validationOptions={{
// 					maxLength: {
// 						value: 10,
// 						message:
// 							'La description doit avoir au maximum 200 caractères',
// 					},
// 				}}
// 			/>
// 			<Button
// 				type='submit'
// 				name='Submit'
// 				onClick={onSubmit}
// 				onSuccess={onSuccess}
// 				onError={onError}
// 			/>
// 		</Form>
// 	);
// }

// export default App;
