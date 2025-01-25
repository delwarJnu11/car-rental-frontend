import { ArrowRight, ThumbsUp } from "lucide-react";
import BgImage from "../../assets/images/hero-bg.webp";
import CarImage from "../../assets/images/hero-car.png";
import SearchForm from "../ui/SearchForm";

const Banner = () => {
	return (
		<div
			className="relative mb-20"
			style={{
				backgroundImage: `url('${BgImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				height: "100vh",
			}}>
			<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 items-center content-center px-8 py-16">
				<div className="flex flex-col">
					<div className="flex items-center">
						<span className="flex items-center justify-center gap-2 p-3 text-sm font-semibold text-gray-700 bg-white rounded-full shadow">
							<ThumbsUp color="#FFA633" />
							100% Trusted car rental platform in the World
						</span>
					</div>
					<h1 className="text-[48px] leading-[55px] -tracking-[3px] font-firaCode font-extrabold text-secondary mt-4">
						Find Your Best
					</h1>
					<h2 className="font-firaCode text-[48px] leading-[55px] -tracking-[3px] font-extrabold text-primary mb-4">
						Dream Car for Rental
					</h2>
					<p className="text-Description font-firaCode text-base pr-6">
						Experience the ultimate in comfort, performance, and sophistication with our luxury car rentals. From sleek
						sedans and stylish coupes to spacious SUVs and elegant convertibles, we offer a range of premium vehicles to
						suit your preferences and lifestyle.
					</p>
					<button className="sm:w-full md:w-1/3 flex items-center justify-center gap-2 px-6 py-3 text-white bg-black rounded-lg hover:bg-primary mt-4">
						View All Cars
						<ArrowRight />
					</button>
				</div>
				<div className="">
					<img
						alt="A luxury SUV car for rental"
						className="w-full h-auto"
						height="400"
						src={CarImage}
					/>
				</div>
			</div>
			<div className="container mx-auto absolute left-9 -bottom-[86px]">
				<SearchForm />
			</div>
		</div>
	);
};
export default Banner;
