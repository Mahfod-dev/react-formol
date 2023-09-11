# react-formol

## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Form](#form)
    -   [FormContext](#formcontext)
    -   [Input](#input)
    -   [Select](#select)
    -   [Button](#button)
    -   [ErrorMessage](#errormessage)
    -   [RadioGroup](#radiogroup)
    -   [Radio](#radio)
    -   [DatePicker](#datepicker)
    -   [Checkbox](#checkbox)
    -   [Textarea](#textarea)
-   [Examples](#examples)
-   [Contributors](#contributors)
-   [License](#license)

---

## Introduction

`react-formol` is a React library for streamlined form management. This library
includes a range of components designed to create powerful and customizable
forms.

---

## Installation

```bash
npm install react-formol
```

Or if you're using Yarn:

```bash
yarn add react-formol
```

---

## Usage

### Form

The wrapper component for your form elements.

```jsx
import { Form } from 'react-formol';

<Form>
	<Input
		name='name'
		label='Name'
		id='name'
		type='text'
		validationOptions={{
			required: { value: true, message: 'Le nom est requis' },
		}}
	/>
</Form>;
```

### FormContext

Provides the required context for form components.

```jsx
import { FormContext } from 'react-formol';

<FormContext.Provider value={{ ...methods }}>
	<form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
</FormContext.Provider>;
```

### Input

Component for input fields.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `type`: String
-   `validationOptions`: Object

```jsx
import { Input } from 'react-formol';

<Input
	name='age'
	label='Age'
	id='age'
	type='number'
/>;
```

### Select

Component for dropdown selection.

#### Props

-   `name`: String (required)
-   `options`: Array of Strings (required)
-   `label`: String (required)
-   `id`: String (required)

```jsx
import { Select } from 'react-formol';

<Select
	name='choice'
	label='Choice'
	id='choice'
	options={['Option 1', 'Option 2', 'Option 3']}
/>;
```

### Button

Component for buttons.

#### Props

-   `type`: String (required)
-   `name`: String (required)
-   `onClick`: Function
-   `onSuccess`: Function
-   `onError`: Function

```jsx
import { Button } from 'react-formol';

<Button
	type='submit'
	name='Submit'
/>;
```

### ErrorMessage

Component for displaying error messages.

#### Props

-   `name`: String (required)

```jsx
import { ErrorMessage } from 'react-formol';

<ErrorMessage name='age' />;
```

### RadioGroup

Component for grouping radio buttons.

#### Props

-   `name`: String (required)
-   `options`: Array of Objects (required)
-   `label`: String (required)

```jsx
import { RadioGroup } from 'react-formol';

<RadioGroup
	name='gender'
	label='Gender'
	options={[
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	]}
/>;
```

### Radio

Individual radio button component.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `value`: String (required)

```jsx
import { Radio } from 'react-formol';

<Radio
	name='gender'
	label='Male'
	value='male'
/>;
```

### DatePicker

Component for date picking.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)

```jsx
import { DatePicker } from 'react-formol';

<DatePicker
	name='birthdate'
	label='Birthdate'
	id='birthdate'
/>;
```

### Checkbox

Component for checkboxes.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)

```jsx
import { Checkbox } from 'react-formol';

<Checkbox
	name='terms'
	label='Accept Terms'
	id='terms'
/>;
```

### Textarea

Component for multiline text input.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)

```jsx
import { Textarea } from 'react-formol';

<Textarea
	name='description'
	label='Description'
	id='description'
/>;
```

---

## Examples

Here's a complete example using all of the components:

```jsx
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
```

---

For more details on changes for each version, see the [CHANGELOG](CHANGELOG.md).

## Contributors

-   [Mahfod](https://github.com/mahfod-dev)

If you would like to contribute, please follow the
[Contribution Guidelines](CONTRIBUTING.md).

---

## License

MIT License. See [LICENSE](LICENSE) for more information.

```












```
