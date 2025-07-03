import type React from "react";
import { useState } from "react";
import { useHealthCareData } from "../hooks/useHealthCareData";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardTabs from "./DashboardTabs";

interface DashboardProps {
	onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
	// Application data management using custom hook
	const { employees, hazards, examinations } = useHealthCareData();

	// UI state management for active tab
	const [activeTab, setActiveTab] = useState("employees");

	// Tab change handler
	const handleTabChange = (value: string) => {
		setActiveTab(value);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Dashboard header with navigation and logout */}
			<DashboardHeader onLogout={onLogout} />

			{/* Main dashboard content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Dashboard title and description */}
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-800">
						Dashboard
					</h2>
					<p className="text-gray-600">
						Manage employees, hazards, and examination schedules
					</p>
				</div>

				{/* Dashboard tabs with organized components */}
				<DashboardTabs
					employees={employees}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			</main>

			{/* Dashboard footer */}
			<DashboardFooter />
		</div>
	);
};

export default Dashboard;
