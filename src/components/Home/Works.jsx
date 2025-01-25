import Icon1 from "../../assets/images//services-icon-01.svg";
import Icon2 from "../../assets/images//services-icon-02.svg";
import Icon3 from "../../assets/images//services-icon-03.svg";
import Heading from "../ui/Heading";
import WorkCard from "../ui/WorkCard";

const Works = () => {
	return (
		<div className="container mx-auto mt-[150px]">
			<Heading title={"How It Works"} />
			<p className="md:w-[439px] mt-4 text-Description text-lg font-firaCode sm:w-full mx-auto text-center">
				Booking a car rental is a straightforward process that typically involves the following steps
			</p>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-8">
				<WorkCard
					image={Icon1}
					title={"1. Choose Date & Locations"}
					description={
						"Determine the date & location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center), and duration of rental."
					}
					color={"#127384"}
				/>
				<WorkCard
					image={Icon2}
					title={"2. Pick-Up Locations"}
					description={
						"Check the availability of your desired vehicle type for your chosen dates and location. Ensure that the rental rates, taxes, fees, and any additional charges."
					}
					color={"#FFA633"}
				/>
				<WorkCard
					image={Icon3}
					title={"3. Book your Car"}
					description={
						"Once you've found car rental option, proceed to make a reservation. Provide the required information, including your details, driver's license, contact info, and payment details."
					}
					color={"#111111"}
				/>
			</div>
		</div>
	);
};
export default Works;
