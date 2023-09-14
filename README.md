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
    -   [FileUpload](#fileupload) <!-- Updated with FileUpload -->
-   [Examples](#examples)
-   [Contributors](#contributors)
-   [License](#license)

---

## Introduction

`react-formol` is a React library designed to simplify form management in web
applications. It provides a variety of components that make it easier to create
powerful and customizable forms. One of the key advantages of this library is
its flexibility in styling. You can choose to use CSS frameworks like Tailwind
or go for traditional CSS depending on your project requirements.

---

## Installation

```bash
npm install react-formol
```

````

Or if you're using Yarn:

```bash
yarn add react-formol
```

---

## Usage

### Form

The `Form` component is the wrapper for your form elements.

```jsx
import { Form } from 'react-formol';

<Form>{/* Your form components */}</Form>;
```

### FormContext

The `FormContext` provides the required context for form components.

```jsx
import { FormContext } from 'react-formol';

<FormContext.Provider value={{ ...methods }}>
	<form onSubmit={methods.handleSubmit(handleSubmit)}>
		{/* Your form components */}
	</form>
</FormContext.Provider>;
```

### Input

The `Input` component is used for input fields.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `type`: String
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Input } from 'react-formol';

<Input
	name='age'
	label='Age'
	id='age'
	type='number'
	validationOptions={{
		required: { value: true, message: 'Age is required' },
	}}
	styleClasses={{
		width: 'w-1/2',
		size: 'text-lg',
		color: 'text-blue-700',
	}}
/>;
```

### Select

The `Select` component is used for dropdown selection.

#### Props

-   `name`: String (required)
-   `options`: Array of Strings (required)
-   `label`: String (required)
-   `id`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Select } from 'react-formol';

<Select
	name='choice'
	label='Choice'
	id='choice'
	options={['Option 1', 'Option 2', 'Option 3']}
	validationOptions={{
		required: { value: true, message: 'A choice is required' },
	}}
	styleClasses={{
		width: 'w-1/3',
		size: 'text-lg',
		color: 'text-red-700',
	}}
/>;
```

### Button

The `Button` component is used for buttons.

#### Props

-   `type`: String (required)
-   `name`: String (required)
-   `onClick`: Function
-   `onSuccess`: Function
-   `onError`: Function
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Button } from 'react-formol';

<Button
	type='submit'
	name='Submit'
	onClick={onSubmit}
	onSuccess={onSuccess}
	onError={onError}
	styleClasses={{
		button: 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded',
	}}
/>;
```

### ErrorMessage

The `ErrorMessage` component is used for displaying error messages.

#### Props

-   `name`: String (required)
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { ErrorMessage } from 'react-formol';

<ErrorMessage
	name='age'
	styleClasses={{
		paragraph: 'text-red-600 text-sm bold',
	}}
/>;
```

### RadioGroup

The `RadioGroup` component is used for grouping radio buttons.

#### Props

-   `name`: String (required)
-   `options`: Array of Objects (required)
-   `label`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { RadioGroup } from 'react-formol';

<RadioGroup
	name='gender'
	label='Gender'
	options={[
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	]}
	validationOptions={{
		required: { value: true, message: 'Gender is required' },
	}}
	styleClasses={{
		input: 'h-4 w-4',
		label: 'text-xs',
		fieldset: 'border p-2',
		legend: 'text-lg',
	}}
/>;
```

### Radio

The `Radio` component is used for individual radio buttons.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `value`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Radio } from 'react-formol';

<Radio
	name='gender'
	label='Male'
	value='male'
	validationOptions={{
		required: { value: true, message: 'Gender is required' },
	}}
	styleClasses={{
		input: 'text-red-500 h-6 w-6',
		label: 'text-xl',
		div: 'border p-2',
	}}
/>;
```

### DatePicker

The

`DatePicker` component is used for date picking.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { DatePicker } from 'react-formol';

<DatePicker
	name='birthdate'
	label='Birthdate'
	id='birthdate'
	validationOptions={{
		required: { value: true, message: 'Date is required' },
	}}
	styleClasses={{
		input: 'text-sm',
		label: 'text-lg',
		div: 'border p-4',
	}}
/>;
```

### Checkbox

The `Checkbox` component is used for checkboxes.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Checkbox } from 'react-formol';

<Checkbox
	name='acceptTerms'
	id='acceptTerms'
	label='Accept Terms and Conditions'
	validationOptions={{
		required: { value: true, message: 'Agreement is required' },
	}}
	styleClasses={{
		input: 'h-4 w-4',
		label: 'text-xs',
		div: 'border p-2',
	}}
/>;
```

### Textarea

The `Textarea` component is used for multiline text input.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { Textarea } from 'react-formol';

<Textarea
	name='description'
	label='Description'
	id='description'
	validationOptions={{
		required: { value: true, message: 'Description is required' },
	}}
	styleClasses={{
		input: 'text-sm',
		label: 'text-lg',
		div: 'border p-4',
	}}
/>;
```

### FileUpload

The `FileUpload` component is used for file uploads.

#### Props

-   `name`: String (required)
-   `label`: String (required)
-   `id`: String (required)
-   `validationOptions`: Object
-   `styleClasses`: Object (optional) - Custom CSS classes for styling.

```jsx
import { FileUpload } from 'react-formol';

<FileUpload
	name='file'
	label='Upload File'
	id='file'
	validationOptions={{
		required: { value: true, message: 'File is required' },
	}}
	styleClasses={{
		input: 'text-sm',
		label: 'text-lg',
		div: 'border p-4',
	}}
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
````
