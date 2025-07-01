/**
 * Navigation header component
 * Renders the top navigation bar with external links and user actions
 */
export function NavigationHeader() {
	return (
		<header className="flex justify-end items-center p-4 space-x-4">
			{/* External service links */}
			<NavigationLink href="/" text="Gmail" />
			<NavigationLink href="/" text="Images" />

			{/* Google apps menu button */}
			<GoogleAppsMenuButton />

			{/* User authentication */}
			<SignInButton />
		</header>
	);
}

/**
 * Reusable navigation link component
 * Provides consistent styling for header navigation links
 */
function NavigationLink({ href, text }: { href: string; text: string }) {
	return (
		<a href={href} className="text-sm text-gray-700 hover:underline">
			{text}
		</a>
	);
}

/**
 * Google apps menu button component
 * Displays the nine-dot grid icon for accessing Google services
 */
function GoogleAppsMenuButton() {
	return (
		<button
			type="button"
			className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
		>
			<svg
				className="w-4 h-4 text-gray-600"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-label="Google apps menu"
			>
				<title>Google apps menu</title>
				<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
			</svg>
		</button>
	);
}

/**
 * Sign-in button component
 * Provides user authentication entry point
 */
function SignInButton() {
	return (
		<button
			type="button"
			className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium"
		>
			Sign in
		</button>
	);
}
