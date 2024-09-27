import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'neumorphic-out': '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.3)',
				'neumorphic-in':
					'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.3)'
			},
			fontFamily: {
				sans: ['Roboto', 'Helvetica Neue', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: ['nord']
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
} as Config;
