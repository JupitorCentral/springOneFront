// Footer component for the healthcare dashboard
import type React from "react";

/**
 * Dashboard footer component containing logo, copyright, and navigation links
 * Provides consistent footer across the application
 */
const DashboardFooter: React.FC = () => {
	return (
		<footer className="bg-white border-t border-gray-200 mt-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					{/* Logo and copyright section */}
					<div className="mb-4 md:mb-0">
						<img
							src="https://readdy.ai/api/search-image?query=modern%20minimalist%20healthcare%20logo%20with%20blue%20and%20teal%20colors%2C%20professional%20medical%20symbol%2C%20clean%20design%2C%20white%20background%2C%20high%20quality%20vector%20style&width=120&height=30&seq=logo3&orientation=landscape"
							alt="HealthCare Management Platform Logo"
							className="h-6"
						/>
						<p className="text-sm text-gray-500 mt-2">
							© 2025 Health Examination Management. All rights
							reserved.
						</p>
					</div>

					{/* Navigation links section */}
					<div className="flex space-x-6">
						<a
							href="/"
							className="text-gray-500 hover:text-gray-700"
						>
							<i className="fas fa-file-alt mr-1"></i>{" "}
							Documentation
						</a>
						<a
							href="/"
							className="text-gray-500 hover:text-gray-700"
						>
							<i className="fas fa-question-circle mr-1"></i>{" "}
							Support
						</a>
						<a
							href="/"
							className="text-gray-500 hover:text-gray-700"
						>
							<i className="fas fa-shield-alt mr-1"></i> Privacy
							Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default DashboardFooter;
