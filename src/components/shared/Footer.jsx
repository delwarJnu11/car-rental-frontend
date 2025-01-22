import { Mail, Phone, Send } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='bg-black dark:bg-transparent text-gray-200 py-12'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
				<div>
					<h3 className='text-[20px] font-semibold mb-6 text-white'>
						About Company
					</h3>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Our Company
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Shop Toyota
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Dreamsrentals USA
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Dreamsrentals Worldwide
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Dreamsrentals Racing
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Virtual Auto Show
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-[20px] font-semibold mb-6 text-white'>
						Vehicles Type
					</h3>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Rental List
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Rental Grid
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Blog List
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Blog Grid
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Testimonials
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-[20px] font-semibold mb-6 text-white'>
						Quick Links
					</h3>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Gallery
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Our Team
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								FAQ
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-primary'
							>
								Terms & Conditions
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-[20px] font-semibold mb-6  text-white'>
						Contact Info
					</h3>
					<div className='space-y-4'>
						<div className='flex items-center space-x-2'>
							<span className='bg-primary text-black p-2 rounded'>
								<Phone color='#fff' />
							</span>
							<span>(+1) 88888 88888</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span className='bg-primary text-black p-2 rounded'>
								<Mail color='#fff' />
							</span>
							<span>demo@example.com</span>
						</div>
						<div className='relative'>
							<input
								type='text'
								placeholder='Enter Your Email Here'
								className='w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring focus:ring-primary'
							/>
							<button className='absolute top-0 right-0 h-full px-4 bg-primary text-black rounded-r'>
								<Send color='#fff' />
							</button>
						</div>
					</div>
					<div className='mt-6'>
						<h4 className='font-semibold mb-2'>Connect with us</h4>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-blue-500 hover:text-white'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='#'
								className='text-pink-500 hover:text-white'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='#'
								className='text-blue-400 hover:text-white'
							>
								<i className='fab fa-behance'></i>
							</a>
							<a
								href='#'
								className='text-blue-300 hover:text-white'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='#'
								className='text-blue-700 hover:text-white'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-12 border-t border-gray-700 pt-6 text-center text-sm'>
				<p>
					Copyright 2024 © Theme Created By Dreams Rent, All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
