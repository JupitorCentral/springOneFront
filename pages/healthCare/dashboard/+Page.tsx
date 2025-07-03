import type React from "react";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../hooks/useAuth";

const DashboardPage: React.FC = () => {
	const { logout } = useAuth();

	return <Dashboard onLogout={logout} />;
};

export default DashboardPage;
