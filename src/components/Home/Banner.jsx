import { ThumbsUp } from 'lucide-react';
import image from '../../assets/images/hero-bg.webp';
import heroCar from '../../assets/images/hero-car.png';

const Banner = () => {
	return (
		<section
			style={{
				backgroundImage: `url('${image}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
			}}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 h-screen'>
				<div className='container mx-auto text-center flex flex-col items-center justify-center'>
					<h2 className='bg-white flex items-center justify-center gap-2 p-4 rounded-full text-lg'>
						<ThumbsUp /> 100% Trusted car rental platform in the World
					</h2>
					<h2 className='flex flex-col items-center justify-center text-[62px] leading-[74.4px] -tracking-[1.2px] font-extrabold'>
						Find Your Best <br />
						<span className='text-primary flex flex-col items-center'>
							Dream Car for <br /> Rental
						</span>
					</h2>
				</div>
				<div className='md:w-1/2 flex items-center justify-center'>
					<img
						className='w-full h-auto'
						src={heroCar}
						alt='Dream Car'
					/>
				</div>
			</div>
		</section>
	);
};
export default Banner;
