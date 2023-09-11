import {
	Input,
	TextArea,
	Form,
	Select,
	Button,
	RadioGroup,
	Checkbox,
	FileUpload,
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
			defaultValues={initialData}>
			<Input
				name='name'
				label='Name'
				id='name'
				type='text'
				validationOptions={{
					required: { value: true, message: 'Le nom est requis' },
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
			/>
			<Select
				name='choice'
				label='Choice'
				id='choice'
				options={['Option 1', 'Option 2', 'Option 3']}
				validationOptions={{
					required: { value: true, message: 'Un choix est requis' },
				}}
			/>
			<TextArea
				name='description'
				label='Description'
				id='description'
				validationOptions={{
					maxLength: {
						value: 200,
						message:
							'La description doit avoir au maximum 200 caractères',
					},
				}}
			/>
			<RadioGroup
				name='gender'
				label='Gender'
				options={[
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
				]}
				validationOptions={{
					required: { value: true, message: 'Le genre est requis' },
				}}
			/>
			<Checkbox
				name='acceptTerms'
				id='acceptTerms'
				label='Accept Terms and Conditions'
				validationOptions={{
					required: { value: true, message: "L'accord est requis" },
				}}
			/>
			<FileUpload
				name='file'
				id='file'
				label='Upload File'
				validationOptions={{
					required: { value: true, message: 'Un fichier est requis' },
				}}
			/>
			<Button
				type='submit'
				name='Submit'
				onClick={onSubmit}
				onSuccess={onSuccess}
				onError={onError}
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
