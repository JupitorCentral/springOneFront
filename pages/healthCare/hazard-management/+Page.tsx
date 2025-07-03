import type React from "react";
import { navigate } from "vike/client/router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import HazardManagement from "../components/HazardManagement";
import { useAuth } from "../hooks/useAuth";
import { useHealthCareData } from "../hooks/useHealthCareData";

const HazardManagementPage: React.FC = () => {
	const { hazards } = useHealthCareData();
	const { logout } = useAuth();

	return (
		<div className="min-h-screen bg-gray-50">
			<DashboardHeader onLogout={logout} />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-800">
						Dashboard
					</h2>
					<p className="text-gray-600">
						Manage employees, hazards, and examination schedules
					</p>
				</div>

				<Tabs value="hazards" className="w-full">
					<TabsList className="grid grid-cols-3 mb-8">
						<TabsTrigger
							value="employees"
							className="!rounded-button whitespace-nowrap"
							onClick={() => window.location.href = "/healthCare/EmployeeManagement"}
						>
							<i className="fas fa-users mr-2"></i> Employee
							Management
						</TabsTrigger>
						<TabsTrigger
							value="hazards"
							className="!rounded-button whitespace-nowrap"
						>
							<i className="fas fa-exclamation-triangle mr-2"></i>{" "}
							Hazard Management
						</TabsTrigger>
						<TabsTrigger
							value="examinations"
							className="!rounded-button whitespace-nowrap"
							onClick={() =>
								navigate("/healthCare/examination-schedule")
							}
						>
							<i className="fas fa-calendar-check mr-2"></i>{" "}
							Examination Schedule
						</TabsTrigger>
					</TabsList>

					<TabsContent value="hazards">
						<HazardManagement hazards={hazards} />
					</TabsContent>
				</Tabs>
			</main>
			<DashboardFooter />
		</div>
	);
};

export default HazardManagementPage;
