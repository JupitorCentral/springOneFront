import type React from "react";
import { useCallback, useState } from "react";

// Simplified authentication hook with proper state management
export const useAuth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// Simple logout handler
	const handleLogout = useCallback(() => {
		console.log("Logout clicked");
		window.location.reload();
	}, []);

	// Handlers for input changes with state management
	const handleUsernameChange = useCallback((value: string) => {
		setUsername(value);
	}, []);

	const handlePasswordChange = useCallback((value: string) => {
		setPassword(value);
	}, []);

	return {
		username,
		password,
		handleLogout,
		handleUsernameChange,
		handlePasswordChange,
	};
};
