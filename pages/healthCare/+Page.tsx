import type React from "react";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import { useAuth } from "./hooks/useAuth";

const HealthCarePage: React.FC = () => {
	const [showDashboard, setShowDashboard] = useState(false);
	const { username, password, handleUsernameChange, handlePasswordChange } =
		useAuth();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		setShowDashboard(true);
	};

	const handleLogout = () => {
		setShowDashboard(false);
	};

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

	return <Dashboard onLogout={handleLogout} />;
};

export default HealthCarePage;
