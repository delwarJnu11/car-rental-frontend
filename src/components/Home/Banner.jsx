import { CircleChevronRight, ThumbsUp } from 'lucide-react';
import image from '../../assets/images/hero-bg.webp';
import carImage from '../../assets/images/hero-car.png';

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
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 h-screen'>
				<div>
					<h2 className='inline-flex bg-white gap-2 p-4 rounded-full text-lg'>
						<ThumbsUp color='#FFA633' /> 100% Trusted car rental platform in the
						World
					</h2>
					<h2 className='text-[62px] leading-[74.4px] -tracking-[2.2px] font-extrabold'>
						Find Your Best <br />
						<span className='text-primary'>
							Dream Car for <br /> Rental
						</span>
					</h2>
					<p className='text-Description'>
						Experience the ultimate in comfort, performance, and sophistication
						with our luxury car rentals. From sleek sedans and stylish coupes to
						spacious SUVs and elegant convertibles, we offer a range of premium
						vehicles to suit your preferences and lifestyle.
					</p>
					<button className='flex justify-center items-center gap-2 font-firaCode px-4 py-2 text-sm font-medium text-white bg-primary rounded border-2 border-transparent hover:bg-white hover:border-orange-500 hover:text-black'>
						<CircleChevronRight /> View More
					</button>
				</div>
				<div className='flex items-center justify-center'>
					<img
						className='w-full h-auto'
						src={carImage}
						alt='Dream Car'
					/>
				</div>
			</div>
		</section>
	);
};
export default Banner;
