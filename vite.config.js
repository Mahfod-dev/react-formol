import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@react-formol': path.resolve(
				__dirname,
				'/Users/mahfod/personal/pckg/form-zod/react-formol/src'
			),
		},
	},
});

console.log(
	path.resolve(
		__dirname,
		'/Users/mahfod/personal/pckg/form-zod/react-formol/src'
	)
);
