// Utility functions for styling and color management

/**
 * Returns appropriate CSS classes for examination status badges
 * Used to provide consistent styling across status indicators
 */
export const getStatusColor = (status: string): string => {
	switch (status) {
		case "Up to date":
			return "bg-green-100 text-green-800";
		case "Upcoming":
			return "bg-yellow-100 text-yellow-800";
		case "Overdue":
			return "bg-red-100 text-red-800";
		default:
			return "bg-gray-100 text-gray-800";
	}
};

/**
 * Returns appropriate CSS classes for risk level badges
 * Used to provide consistent styling across risk level indicators
 */
export const getRiskLevelColor = (level: string): string => {
	switch (level) {
		case "High":
			return "bg-red-100 text-red-800";
		case "Medium":
			return "bg-yellow-100 text-yellow-800";
		case "Low":
			return "bg-green-100 text-green-800";
		default:
			return "bg-gray-100 text-gray-800";
	}
};
