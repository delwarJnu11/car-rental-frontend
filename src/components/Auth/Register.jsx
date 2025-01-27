import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const INIT = {
	first_name: "",
	last_name: "",
	phone: "",
	email: "",
	password: "",
	national_id: "",
	image: null,
	house_no: "",
	road_no: "",
	postal_code: "",
	state: "",
	city: "",
	country: "",
};

const Register = ({ isRegisterOpen, onHandleRegisterModal }) => {
	const [formData, setFormData] = useState({ ...INIT });

	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};
		if (!formData.first_name) newErrors.first_name = "First Name is required";
		if (!formData.last_name) newErrors.last_name = "Last Name is required";
		if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10-15 digits";
		if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
		if (!formData.password || formData.password.length < 6)
			newErrors.password = "Password must be at least 6 characters";
		if (!formData.national_id) newErrors.national_id = "National ID is required";
		if (!formData.image) newErrors.image = "Image is required";
		if (!formData.house_no) newErrors.house_no = "House number is required";
		if (!formData.road_no) newErrors.road_no = "Road number is required";
		if (!formData.postal_code) newErrors.postal_code = "Postal code is required";
		if (!formData.state) newErrors.state = "State is required";
		if (!formData.city) newErrors.city = "City is required";
		if (!formData.country) newErrors.country = "Country is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			const data = new FormData();
			for (const key in formData) {
				data.append(key, formData[key]);
			}
			const response = await axios.post("https://devdelwar.com/api/customer/create", data);
			if (response.data.success) {
				toast.success(response.data.message);
				onHandleRegisterModal(isRegisterOpen);
			} else {
				toast.error(response.data.message);
			}
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div
				className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
				onClick={() => onHandleRegisterModal(isRegisterOpen)}>
				<div
					className="bg-white w-[90%] max-w-4xl h-[80vh] rounded-lg shadow-lg overflow-y-auto p-8"
					onClick={(e) => e.stopPropagation()}>
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Form</h2>
					<form onSubmit={handleSubmit}>
						<div className="grid grid-cols-2 gap-4">
							{[
								{ label: "First Name", name: "first_name" },
								{ label: "Last Name", name: "last_name" },
								{ label: "Phone", name: "phone" },
								{ label: "Email", name: "email", type: "email" },
								{ label: "Password", name: "password", type: "password" },
								{ label: "National ID", name: "national_id" },
								{ label: "House No", name: "house_no" },
								{ label: "Road No", name: "road_no" },
								{ label: "Postal Code", name: "postal_code" },
								{ label: "State", name: "state" },
								{ label: "City", name: "city" },
								{ label: "Country", name: "country" },
							].map(({ label, name, type = "text" }) => (
								<div key={name}>
									<label className="block text-gray-700">{label}</label>
									<input
										name={name}
										type={type}
										onChange={handleChange}
										value={formData[name]}
										className={`w-full px-4 py-2 mt-2 border ${
											errors[name] ? "border-price" : "border-primary"
										} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
									/>
									{errors[name] && <p className="text-price text-sm">{errors[name]}</p>}
								</div>
							))}
							<div className="col-span-2">
								<label className="block text-gray-700">Image</label>
								<input
									name="image"
									type="file"
									onChange={handleChange}
									className={`w-full px-4 py-2 mt-2 border ${
										errors.image ? "border-price" : "border-primary"
									} rounded-lg focus:outline-none`}
								/>
								{errors.image && <p className="text-price text-sm">{errors.image}</p>}
							</div>
						</div>
						<div className="mt-6 flex justify-end">
							<button
								type="button"
								onClick={() => onHandleRegisterModal(isRegisterOpen)}
								className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md mr-4 hover:bg-gray-300">
								Cancel
							</button>
							<button
								type="submit"
								className="px-4 py-2 text-white bg-primary rounded-md hover:bg-opacity-90">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Register;
