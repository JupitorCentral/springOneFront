// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import type React from "react";
import { useState } from "react";
import DashboardFooter from "./components/DashboardFooter";
import DashboardHeader from "./components/DashboardHeader";
import DashboardTabs from "./components/DashboardTabs";
import LoginPage from "./components/LoginPage";
import { useAuth } from "./hooks/useAuth";
import { useHealthCareData } from "./hooks/useHealthCareData";

/**
 * Main healthcare application component
 * Shows login page initially, then dashboard after sign-in
 */
const HealthCarePage: React.FC = () => {
	// Simple state to track if we should show dashboard
	const [showDashboard, setShowDashboard] = useState(false);

	// Authentication handlers (no React state, just static)
	const {
		username,
		password,
		handleLogout,
		handleUsernameChange,
		handlePasswordChange,
	} = useAuth();

	// Application data management using custom hook
	const { employees, hazards, examinations } = useHealthCareData();

	// UI state management for active tab
	const [activeTab, setActiveTab] = useState("employees");

	// Handle login form submission - switch to dashboard
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login form submitted - showing dashboard");
		setShowDashboard(true);
	};

	// Handle logout - switch back to login
	const handleLogoutClick = () => {
		console.log("Logout clicked - showing login");
		setShowDashboard(false);
	};

	// Tab change handler
	const handleTabChange = (value: string) => {
		setActiveTab(value);
	};

	// Render login page if dashboard should not be shown
	if (!showDashboard) {
		return (
			<LoginPage
				username={username}
				password={password}
				onUsernameChange={handleUsernameChange}
				onPasswordChange={handlePasswordChange}
				onSubmit={handleLogin}
			/>
		);
	}

	// Render main dashboard if user has signed in
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Dashboard header with navigation and logout */}
			<DashboardHeader onLogout={handleLogoutClick} />

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
					hazards={hazards}
					examinations={examinations}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			</main>

			{/* Dashboard footer */}
			<DashboardFooter />
		</div>
	);
};

export default HealthCarePage;
