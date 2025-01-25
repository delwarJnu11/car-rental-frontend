import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../ui/CarCard";
import Heading from "../ui/Heading";

const Cars = () => {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		const fetchVehicles = async () => {
			const response = await axios.get("https://devdelwar.com/api/vehicles/");
			setVehicles(response?.data?.vehicles);
		};
		fetchVehicles();
	}, []);
	return (
		<div className="my-20">
			<Heading title={"Explore Most Popular Cars"} />
			<p className="md:w-[439px] mt-4 text-Description text-lg font-firaCode sm:w-full mx-auto text-center">
				Here's a list of some of the most popular cars globally, based on sales and customer preferences.
			</p>

			<div className="container mx-auto gap-6 grid sm:grid-cols-1 md:grid-cols-3 mt-6">
				{vehicles.length &&
					vehicles?.map((vehicle) => (
						<CarCard
							key={vehicle.id}
							car={vehicle}
						/>
					))}
			</div>
		</div>
	);
};
export default Cars;
