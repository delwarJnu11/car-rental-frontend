import { Search } from "lucide-react";

const SearchForm = () => {
	return (
		<form className="bg-white shadow-lg rounded-2xl p-8 flex flex-wrap items-center gap-4">
			<div className="flex flex-col space-y-2 flex-1">
				<label
					htmlFor="start"
					className="text-sm font-medium text-gray-700">
					Pickup Location
				</label>
				<input
					type="text"
					name="start"
					id="start"
					placeholder="Enter Pickup location"
					className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="flex flex-col space-y-2 flex-1">
				<label
					htmlFor="end"
					className="text-sm font-medium text-gray-700">
					Drop Off Location
				</label>
				<input
					type="text"
					name="end"
					id="end"
					placeholder="Enter Drop off location"
					className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="flex flex-col space-y-2 flex-1">
				<label
					htmlFor="startDate"
					className="text-sm font-medium text-gray-700">
					Journey Start Date
				</label>
				<input
					type="date"
					name="startDate"
					id="startDate"
					className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="flex flex-col space-y-2 flex-1">
				<label
					htmlFor="endDate"
					className="text-sm font-medium text-gray-700">
					Journey End Date
				</label>
				<input
					type="date"
					name="endDate"
					id="endDate"
					className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<button
				type="submit"
				className="bg-primary hover:bg-secondary text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary mt-6 flex justify-center items-center gap-2">
				<Search /> Search
			</button>
		</form>
	);
};
export default SearchForm;
