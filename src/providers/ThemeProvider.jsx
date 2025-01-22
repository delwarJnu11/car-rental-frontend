import { useState } from 'react';
import { ThemeContext } from '../contexts';

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);

	const toggleTheme = () => {
		setTheme(!theme);
		document.body.classList.toggle('dark');
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;
