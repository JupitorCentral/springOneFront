import type React from "react";
import { useState } from "react";
import { navigate } from "vike/client/router";
import LoginPage from "./components/LoginPage";
import { useAuth } from "./hooks/useAuth";

const HealthCarePage: React.FC = () => {
	const { username, password, handleUsernameChange, handlePasswordChange } =
		useAuth();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Navigate to dashboard page for SSR
		navigate("/healthCare/dashboard");
	};

	return (
		<LoginPage
			username={username}
			password={password}
			onUsernameChange={handleUsernameChange}
			onPasswordChange={handlePasswordChange}
			onSubmit={handleLogin}
		/>
	);
};

export default HealthCarePage;
