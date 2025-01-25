import { Card } from "antd";
const { Meta } = Card;

const CarCard = ({ car }) => {
	return (
		<Card
			hoverable
			style={{ width: "100%" }}
			cover={
				<div style={{ height: "200px", overflow: "hidden" }}>
					<img
						alt={car.vehicle_name}
						src={`https://devdelwar.com/img/vehicle/${car.image}`}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
			}>
			<Meta
				title={car.vehicle_name}
				description={car.description.slice(0, 150) || "Vehicle Description"}
			/>
		</Card>
	);
};
export default CarCard;
