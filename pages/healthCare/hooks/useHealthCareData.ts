// Custom hook for managing healthcare application data
import { useState } from "react";
import type { Employee, Examination, Hazard } from "../components/types";

const createInitialEmployees = () => [
	{
		id: "1",
		name: "John Smith",
		department: "Laboratory",
		position: "Technician",
		email: "john.smith@company.com",
		phone: "555-0101",
		hireDate: "2023-01-15",
		status: "active" as const,
	},
	{
		id: "2",
		name: "Emily Johnson",
		department: "Research",
		position: "Scientist",
		email: "emily.johnson@company.com",
		phone: "555-0102",
		hireDate: "2022-05-10",
		status: "active" as const,
	},
	{
		id: "3",
		name: "Michael Brown",
		department: "Production",
		position: "Operator",
		email: "michael.brown@company.com",
		phone: "555-0103",
		hireDate: "2021-11-22",
		status: "active" as const,
	},
	{
		id: "4",
		name: "Sarah Davis",
		department: "Laboratory",
		position: "Supervisor",
		email: "sarah.davis@company.com",
		phone: "555-0104",
		hireDate: "2020-08-03",
		status: "active" as const,
	},
	{
		id: "5",
		name: "Robert Wilson",
		department: "Maintenance",
		position: "Engineer",
		email: "robert.wilson@company.com",
		phone: "555-0105",
		hireDate: "2022-03-17",
		status: "active" as const,
	},
];

const createInitialHazards = () => [
	{
		id: "1",
		title: "Ozone Exposure Risk",
		description: "High levels of ozone detected in laboratory area requiring immediate attention",
		location: "Laboratory Room A",
		severity: "high" as const,
		reportedBy: "John Smith",
		reportedDate: "2025-06-15",
		status: "open" as const,
		assignedTo: "Sarah Davis",
	},
	{
		id: "2",
		title: "Lead Contamination",
		description: "Potential lead exposure in production area due to equipment malfunction",
		location: "Production Floor B",
		severity: "critical" as const,
		reportedBy: "Emily Johnson",
		reportedDate: "2025-06-10",
		status: "in-progress" as const,
		assignedTo: "Michael Brown",
	},
	{
		id: "3",
		title: "Radiation Source Leak",
		description: "Minor radiation leak detected near storage facility",
		location: "Storage Facility C",
		severity: "medium" as const,
		reportedBy: "Michael Brown",
		reportedDate: "2025-05-22",
		status: "resolved" as const,
		assignedTo: "Robert Wilson",
	},
	{
		id: "4",
		title: "Excessive Noise Levels",
		description: "Noise levels exceeding safety standards in maintenance area",
		location: "Maintenance Workshop",
		severity: "low" as const,
		reportedBy: "Sarah Davis",
		reportedDate: "2025-05-03",
		status: "open" as const,
		assignedTo: "Robert Wilson",
	},
	{
		id: "5",
		title: "Chemical Vapor Leak",
		description: "Chemical vapors detected in ventilation system requiring investigation",
		location: "Research Lab D",
		severity: "medium" as const,
		reportedBy: "Robert Wilson",
		reportedDate: "2025-06-17",
		status: "in-progress" as const,
		assignedTo: "Emily Johnson",
	},
];

const createInitialExaminations = () => [
	{
		id: "1",
		employeeId: "1",
		employeeName: "John Smith",
		hazardId: "1",
		hazardName: "Ozone",
		lastExamDate: "2024-12-15",
		nextExamDate: "2025-06-15",
		status: "Upcoming",
	},
	{
		id: "2",
		employeeId: "2",
		employeeName: "Emily Johnson",
		hazardId: "2",
		hazardName: "Lead",
		lastExamDate: "2025-05-10",
		nextExamDate: "2025-08-10",
		status: "Up to date",
	},
	{
		id: "3",
		employeeId: "3",
		employeeName: "Michael Brown",
		hazardId: "3",
		hazardName: "Radiation",
		lastExamDate: "2024-08-22",
		nextExamDate: "2025-08-22",
		status: "Up to date",
	},
	{
		id: "4",
		employeeId: "4",
		employeeName: "Sarah Davis",
		hazardId: "1",
		hazardName: "Ozone",
		lastExamDate: "2024-11-03",
		nextExamDate: "2025-05-03",
		status: "Overdue",
	},
	{
		id: "5",
		employeeId: "5",
		employeeName: "Robert Wilson",
		hazardId: "5",
		hazardName: "Chemical Vapors",
		lastExamDate: "2025-01-17",
		nextExamDate: "2025-07-17",
		status: "Upcoming",
	},
];

/**
 * Custom hook that provides mock data and state management for the healthcare application
 * Centralizes data management and provides consistent data structure
 */
export const useHealthCareData = () => {
	// Use lazy initial state to avoid re-creating arrays on every render
	const [employees] = useState<Employee[]>(() => createInitialEmployees());
	const [hazards] = useState<Hazard[]>(() => createInitialHazards());
	const [examinations] = useState<Examination[]>(() => createInitialExaminations());

	return {
		employees,
		hazards,
		examinations,
	};
};
