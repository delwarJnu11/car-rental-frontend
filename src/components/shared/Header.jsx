import { AlignJustify, Lock, Moon, Sun, User, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.png';
import logo from '../../assets/images/logo.png';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);

	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className='bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
				<NavLink
					to='/'
					className='overflow-hidden'
				>
					<img
						className='w-50 h-16'
						src={theme ? logoWhite : logo}
						alt=''
					/>
				</NavLink>

				{/* Desktop Menu */}
				<nav className='hidden md:flex space-x-6'>
					{menuItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='text-gray-800 font-firaCode dark:text-gray-200 hover:text-primary dark:hover:text-primary'
						>
							{item.name}
						</a>
					))}
				</nav>

				{/* Right-side Buttons */}
				<div className='hidden md:flex items-center space-x-4'>
					<button className='flex justify-center items-center gap-2 font-firaCode px-4 py-2 text-sm font-medium text-white bg-secondary rounded border-2 border-black hover:bg-white hover:border-orange-500 hover:text-black'>
						<User /> Login
					</button>
					<button className='flex justify-center items-center gap-2 font-firaCode px-4 py-2 text-sm font-medium text-white bg-primary rounded border-2 border-transparent hover:bg-white hover:border-orange-500 hover:text-black'>
						<Lock /> Register
					</button>
					<button
						onClick={toggleTheme}
						className='text-gray-800 dark:text-gray-200 focus:outline-none'
					>
						{theme ? <Sun className='h-6 w-6' /> : <Moon className='h-6 w-6' />}
					</button>
				</div>

				{/* Mobile Hamburger Menu */}
				<div className='md:hidden'>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='text-gray-800 dark:text-gray-200 text-2xl focus:outline-none'
					>
						{menuOpen ? <AlignJustify /> : <X />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<nav className='md:hidden bg-white dark:bg-gray-800 shadow-md'>
					<ul className='flex flex-col items-start space-y-2 p-4'>
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className='block text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
								>
									{item.name}
								</a>
							</li>
						))}
						<li>
							<button className='w-full text-left px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600'>
								Login
							</button>
						</li>
						<li>
							<button className='w-full text-left px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white'>
								Logout
							</button>
						</li>
						<li>
							<button
								onClick={toggleTheme}
								className='text-gray-800 dark:text-gray-200 focus:outline-none mt-2'
							>
								{!theme ? (
									<Sun className='h-6 w-6' />
								) : (
									<Moon className='h-6 w-6' />
								)}
							</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
