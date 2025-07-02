// Header component for the healthcare dashboard
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { DashboardHeaderProps } from "./types";

/**
 * Dashboard header component containing logo, title, and user actions
 * Provides consistent navigation and logout functionality across the dashboard
 */
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout }) => {
	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo and application title section */}
					<div className="flex items-center">
						<img
							src="https://readdy.ai/api/search-image?query=modern%20minimalist%20healthcare%20logo%20with%20blue%20and%20teal%20colors%2C%20professional%20medical%20symbol%2C%20clean%20design%2C%20white%20background%2C%20high%20quality%20vector%20style&width=160&height=40&seq=logo2&orientation=landscape"
							alt="HealthCare Management Platform Logo"
							className="h-8"
						/>
						<h1 className="ml-3 text-xl font-semibold text-gray-800">
							Health Examination Management
						</h1>
					</div>

					{/* User profile and logout section */}
					<div className="flex items-center">
						<span className="mr-4 text-sm text-gray-600">
							Admin User
						</span>

						<div className="relative">
							<Avatar className="cursor-pointer">
								<AvatarImage
									src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20healthcare%20administrator%2C%20neutral%20expression%2C%20business%20attire%2C%20plain%20background%2C%20high%20quality%20portrait&width=40&height=40&seq=avatar1&orientation=squarish"
									alt="User"
								/>
								<AvatarFallback>AU</AvatarFallback>
							</Avatar>

							<Button
								variant="ghost"
								size="sm"
								onClick={onLogout}
								className="ml-2 text-gray-600 hover:text-gray-900 !rounded-button whitespace-nowrap"
							>
								<i className="fas fa-sign-out-alt mr-1"></i>{" "}
								Logout
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
