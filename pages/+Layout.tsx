import "../src/index.css";
import type { ReactNode } from "react";

/**
 * Root layout component that wraps all pages
 * Imports global styles and provides base HTML structure
 */
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>SpringOne Front</title>
			</head>
			<body>
				<div id="app">{children}</div>
			</body>
		</html>
	);
}
