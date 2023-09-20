// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.js'),
			name: 'ReactFormol',
			fileName: 'react-keyrus-formol',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'prop-types'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'prop-types': 'PropTypes',
				},
			},
		},
	},
});
