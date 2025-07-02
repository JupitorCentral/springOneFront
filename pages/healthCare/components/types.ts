// Type definitions for Healthcare Management System
export interface Employee {
	id: string;
	name: string;
	department: string;
	position: string;
	email: string;
	phone: string;
	hireDate: string;
	lastExamination?: string;
	nextExamination?: string;
	status: "active" | "inactive" | "on-leave";
}

export interface Hazard {
	id: string;
	title: string;
	description: string;
	location: string;
	severity: "low" | "medium" | "high" | "critical";
	reportedBy: string;
	reportedDate: string;
	status: "open" | "in-progress" | "resolved";
	assignedTo?: string;
}

export interface Examination {
	id: string;
	employeeId: string;
	employeeName: string;
	type: string;
	date: string;
	time: string;
	location: string;
	status: "scheduled" | "completed" | "cancelled" | "rescheduled";
	notes?: string;
}

export interface LoginFormProps {
	username: string;
	password: string;
	onUsernameChange: (value: string) => void;
	onPasswordChange: (value: string) => void;
	onSubmit: (e: React.FormEvent) => void;
}

export interface DashboardHeaderProps {
	onLogout: () => void;
}
