// Custom hook for managing healthcare application data
import { useState } from "react";
import type { Employee, Examination, Hazard } from "../components/types";

/**
 * Custom hook that provides mock data and state management for the healthcare application
 * Centralizes data management and provides consistent data structure
 */
export const useHealthCareData = () => {
	// Mock employee data for testing and development
	const [employees] = useState<Employee[]>([
		{
			id: 1,
			name: "John Smith",
			department: "Laboratory",
			position: "Technician",
			startDate: "2023-01-15",
		},
		{
			id: 2,
			name: "Emily Johnson",
			department: "Research",
			position: "Scientist",
			startDate: "2022-05-10",
		},
		{
			id: 3,
			name: "Michael Brown",
			department: "Production",
			position: "Operator",
			startDate: "2021-11-22",
		},
		{
			id: 4,
			name: "Sarah Davis",
			department: "Laboratory",
			position: "Supervisor",
			startDate: "2020-08-03",
		},
		{
			id: 5,
			name: "Robert Wilson",
			department: "Maintenance",
			position: "Engineer",
			startDate: "2022-03-17",
		},
	]);

	// Mock hazard data for testing and development
	const [hazards] = useState<Hazard[]>([
		{
			id: 1,
			name: "Ozone",
			riskLevel: "High",
			examFrequency: "Every 6 months",
			protocol: "Respiratory assessment",
		},
		{
			id: 2,
			name: "Lead",
			riskLevel: "High",
			examFrequency: "Every 3 months",
			protocol: "Blood test",
		},
		{
			id: 3,
			name: "Radiation",
			riskLevel: "Medium",
			examFrequency: "Annual",
			protocol: "Full body scan",
		},
		{
			id: 4,
			name: "Noise",
			riskLevel: "Low",
			examFrequency: "Annual",
			protocol: "Hearing test",
		},
		{
			id: 5,
			name: "Chemical Vapors",
			riskLevel: "Medium",
			examFrequency: "Every 6 months",
			protocol: "Lung function test",
		},
	]);

	// Mock examination data for testing and development
	const [examinations] = useState<Examination[]>([
		{
			id: 1,
			employeeId: 1,
			employeeName: "John Smith",
			hazardId: 1,
			hazardName: "Ozone",
			lastExamDate: "2024-12-15",
			nextExamDate: "2025-06-15",
			status: "Upcoming",
		},
		{
			id: 2,
			employeeId: 2,
			employeeName: "Emily Johnson",
			hazardId: 2,
			hazardName: "Lead",
			lastExamDate: "2025-05-10",
			nextExamDate: "2025-08-10",
			status: "Up to date",
		},
		{
			id: 3,
			employeeId: 3,
			employeeName: "Michael Brown",
			hazardId: 3,
			hazardName: "Radiation",
			lastExamDate: "2024-08-22",
			nextExamDate: "2025-08-22",
			status: "Up to date",
		},
		{
			id: 4,
			employeeId: 4,
			employeeName: "Sarah Davis",
			hazardId: 1,
			hazardName: "Ozone",
			lastExamDate: "2024-11-03",
			nextExamDate: "2025-05-03",
			status: "Overdue",
		},
		{
			id: 5,
			employeeId: 5,
			employeeName: "Robert Wilson",
			hazardId: 5,
			hazardName: "Chemical Vapors",
			lastExamDate: "2025-01-17",
			nextExamDate: "2025-07-17",
			status: "Upcoming",
		},
	]);

	return {
		employees,
		hazards,
		examinations,
	};
};
