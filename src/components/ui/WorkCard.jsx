const WorkCard = ({ image, title, description, color }) => {
	return (
		<div
			style={{ borderBottomColor: color }}
			className="border-b-2">
			<div
				style={{ borderColor: color }}
				className="w-24 h-24 mx-auto flex justify-center items-center border-2 border-dashed m-4 rounded-full">
				<img
					style={{ backgroundColor: color }}
					className="rounded-full p-4 w-[85%]"
					src={image}
					alt=""
				/>
			</div>
			<h2 className="text-2xl text-heading font-bold mb-2 font-firaCode text-center">{title}</h2>
			<p className="text-Description font-medium text-lg text-center mb-6">{description}</p>
		</div>
	);
};
export default WorkCard;
