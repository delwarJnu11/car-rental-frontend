import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Register from '../components/Auth/Register';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		children: [
			{
				path: '/',
				Component: HomePage,
			},
			{
				path: '/register',
				Component: Register,
			},
		],
	},
]);
