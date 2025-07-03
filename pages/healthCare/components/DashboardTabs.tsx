// Dashboard tabs component for organizing main application sections
import type React from "react";
import { navigate } from "vike/client/router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeManagement from "./EmployeeManagement";
import type { Employee, Examination, Hazard } from "./types";

interface DashboardTabsProps {
	employees: Employee[];
	activeTab: string;
	onTabChange: (value: string) => void;
}

/**
 * Dashboard tabs component that organizes the main application sections
 * Provides navigation between Employee, Hazard, and Examination management
 */
const DashboardTabs: React.FC<DashboardTabsProps> = ({
	employees,
	activeTab,
	onTabChange,
}) => {
	return (
		<Tabs value={activeTab} className="w-full" onValueChange={onTabChange}>
			{/* Tab navigation with icons and labels */}
			<TabsList className="grid grid-cols-3 mb-8">
				<TabsTrigger
					value="employees"
					className="!rounded-button whitespace-nowrap"
					onClick={() => window.location.href = "/healthCare/EmployeeManagement"}
				>
					<i className="fas fa-users mr-2"></i> Employee Management
				</TabsTrigger>
				<TabsTrigger
					value="hazards"
					className="!rounded-button whitespace-nowrap"
					onClick={() => window.location.href = "/healthCare/hazard-management"}
				>
					<i className="fas fa-exclamation-triangle mr-2"></i> Hazard
					Management
				</TabsTrigger>
				<TabsTrigger
					value="examinations"
					className="!rounded-button whitespace-nowrap"
					onClick={() => window.location.href = "/healthCare/examination-schedule"}
				>
					<i className="fas fa-calendar-check mr-2"></i> Examination
					Schedule
				</TabsTrigger>
			</TabsList>

			{/* Tab content sections - show employee management for dashboard */}
			<TabsContent value="employees">
				<EmployeeManagement employees={employees} />
			</TabsContent>
		</Tabs>
	);
};

export default DashboardTabs;
