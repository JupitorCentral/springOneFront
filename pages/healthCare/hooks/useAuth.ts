// Simplified authentication without React hooks - just static UI functionality
/**
 * Simple authentication handler without state management
 * Returns static values and basic login function for UI testing
 */
export const useAuth = () => {
	// Static values for UI display
	const isLoggedIn = false;
	const username = "";
	const password = "";

	// Simple login handler that always succeeds
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login button clicked - redirecting to dashboard");
		// Force page reload to show dashboard
		window.location.reload();
	};

	// Simple logout handler
	const handleLogout = () => {
		console.log("Logout clicked");
		window.location.reload();
	};

	// Dummy handlers for input changes (no state management)
	const handleUsernameChange = (value: string) => {
		console.log("Username input:", value);
	};

	const handlePasswordChange = (value: string) => {
		console.log("Password input:", value);
	};

	return {
		isLoggedIn,
		username,
		password,
		handleLogin,
		handleLogout,
		handleUsernameChange,
		handlePasswordChange,
	};
};
