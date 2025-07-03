// Login page component for healthcare management system
import type React from "react";
import { Input } from "@/components/ui/input";
import type { LoginFormProps } from "./types";

interface LoginPageProps extends LoginFormProps {}

/**
 * Login page component that handles user authentication
 * Displays company branding and login form with both username and password inputs
 * No state management - just static UI for testing
 */
const LoginPage: React.FC<LoginPageProps> = ({
	username,
	password,
	onUsernameChange,
	onPasswordChange,
	onSubmit,
}) => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Company branding and header section */}
				<div className="text-center mb-8">
					<img
						src="https://readdy.ai/api/search-image?query=modern%20minimalist%20healthcare%20logo%20with%20blue%20and%20teal%20colors%2C%20professional%20medical%20symbol%2C%20clean%20design%2C%20white%20background%2C%20high%20quality%20vector%20style&width=200&height=80&seq=logo1&orientation=landscape"
						alt="HealthCare Management Platform Logo"
						className="mx-auto h-16 mb-6"
					/>
					<h1 className="text-2xl font-semibold text-gray-800">
						Health Examination Management
					</h1>
					<p className="text-gray-500 mt-2">
						Sign in to access your dashboard
					</p>
				</div>

				{/* Login form container with shadcn-like styling */}
				<div className="rounded-xl border bg-card text-card-foreground shadow">
					<div className="flex flex-col space-y-1.5 p-6">
						<h2 className="font-semibold tracking-tight text-xl text-center">
							Sign In
						</h2>
						<p className="text-sm text-muted-foreground text-center">
							Enter your credentials to continue
						</p>
					</div>

					<div className="p-6 pt-0">
						<form onSubmit={onSubmit} className="space-y-4">
							{/* Username/Email input field */}
							<div className="space-y-2">
								<label
									htmlFor="username"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Email or Username
								</label>
								<Input
									id="username"
									type="text"
									placeholder="Enter your email or username"
									value={username}
									onChange={(e) =>
										onUsernameChange(e.target.value)
									}
								/>
							</div>

							{/* Password input field with forgot password link */}
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<label
										htmlFor="password"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Password
									</label>
									<a
										href="/"
										className="text-sm text-blue-600 hover:text-blue-800"
									>
										Forgot password?
									</a>
								</div>
								<Input
									id="password"
									type="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										onPasswordChange(e.target.value)
									}
								/>
							</div>

							{/* Submit button */}
							<button
								type="submit"
								className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
							>
								Sign In
							</button>
						</form>
					</div>

					{/* Footer with account registration link */}
					<div className="flex items-center p-6 pt-0 justify-center border-t">
						<p className="text-sm text-gray-500">
							Don't have an account?{" "}
							<a
								href="/"
								className="text-blue-600 hover:text-blue-800"
							>
								Contact administrator
							</a>
						</p>
					</div>
				</div>

				{/* Copyright and date footer */}
				<div className="mt-8 text-center text-sm text-gray-500">
					<p>
						© 2025 Health Examination Management. All rights
						reserved.
					</p>
					<p className="mt-1">Tuesday, July 1, 2025</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
