import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form Submitted:", data);
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-8 rounded-lg shadow-lg w-96">
				<h2
					className="text-2xl font-bold mb-6 text-center"
					style={{ color: "#FFA633" }}>
					Login
				</h2>

				{/* Email Field */}
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Invalid email address",
							},
						})}
						className={`mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border ${
							errors.email ? "border-red-500" : "border-gray-300"
						} rounded-lg focus:outline-none focus:ring-2`}
						style={{
							borderColor: errors.email ? "#FF0000" : "#FFA633",
							focus: {
								borderColor: "#FFA633",
							},
						}}
					/>
					{errors.email && (
						<p
							className="text-sm mt-1"
							style={{ color: "#FF0000" }}>
							{errors.email.message}
						</p>
					)}
				</div>

				{/* Password Field */}
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						type="password"
						id="password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters long",
							},
						})}
						className={`mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-100 border ${
							errors.password ? "border-red-500" : "border-gray-300"
						} rounded-lg focus:outline-none focus:ring-2`}
						style={{
							borderColor: errors.password ? "#FF0000" : "#FFA633",
							focus: {
								borderColor: "#FFA633",
							},
						}}
					/>
					{errors.password && (
						<p
							className="text-sm mt-1"
							style={{ color: "#FF0000" }}>
							{errors.password.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<div className="mt-6">
					<button
						type="submit"
						className="w-full px-4 py-2 text-white rounded-lg focus:outline-none"
						style={{
							backgroundColor: "#FFA633",
							transition: "background-color 0.3s",
						}}>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
export default Login;
