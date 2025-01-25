import { Search } from 'lucide-react';

const SearchForm = () => {
	return (
		<div className='container mx-auto'>
			<div className='w-full bg-white p-6 rounded-lg shadow-md flex flex-wrap items-center justify-between'>
				<div className='flex flex-col md:flex-row md:space-x-4 w-full'>
					<div className='flex flex-col mb-4 md:mb-0'>
						<label
							htmlFor='pickup-location'
							className='font-semibold text-gray-700 mb-2'
						>
							Pickup Location
						</label>
						<select
							id='pickup-location'
							className='border border-gray-300 rounded-lg p-2 w-full'
						>
							<option>All Location</option>
						</select>
					</div>
					<div className='flex flex-col mb-4 md:mb-0'>
						<label
							htmlFor='drop-location'
							className='font-semibold text-gray-700 mb-2'
						>
							Drop Location
						</label>
						<select
							id='drop-location'
							className='border border-gray-300 rounded-lg p-2 w-full'
						>
							<option>All Location</option>
						</select>
					</div>
					<div className='flex flex-col mb-4 md:mb-0 w-full'>
						<label
							htmlFor='pickup-date'
							className='font-semibold text-gray-700 mb-2'
						>
							Pickup Date
						</label>
						<div className='relative'>
							<input
								type='date'
								id='pickup-date'
								className='border border-gray-300 rounded-lg p-2 w-full pl-10'
							/>
						</div>
					</div>
					<div className='flex flex-col mb-4 md:mb-0 w-full'>
						<label
							htmlFor='dropoff-date'
							className='font-semibold text-gray-700 mb-2'
						>
							Drop Off Date
						</label>
						<div className='relative'>
							<input
								type='date'
								id='dropoff-date'
								className='border border-gray-300 rounded-lg p-2 w-full pl-10'
							/>
						</div>
					</div>
					<div className='flex items-end w-full md:w-auto'>
						<button className='bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg flex items-center'>
							<Search className='mr-2' /> Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SearchForm;
