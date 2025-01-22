/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				firaCode: ['Fira Sans', 'serif'],
			},
			colors: {
				primary: '#FFA633',
				secondary: '#201F1D',
				heading: '#111111',
				Description: '#787878',
				price: '#FF0000',
			},
		},
	},
	plugins: [],
};
