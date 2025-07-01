/**
 * Google logo component
 * Renders the iconic Google logo with colored letters
 */
export function GoogleLogo() {
	return (
		<div className="mb-8">
			<h1 className="text-8xl font-light text-gray-800 tracking-tight">
				{/* Each letter with its specific Google brand color */}
				<LogoLetter color="text-blue-500" letter="G" />
				<LogoLetter color="text-red-500" letter="o" />
				<LogoLetter color="text-yellow-500" letter="o" />
				<LogoLetter color="text-blue-500" letter="g" />
				<LogoLetter color="text-green-500" letter="l" />
				<LogoLetter color="text-red-500" letter="e" />
			</h1>
		</div>
	);
}

/**
 * Individual logo letter component
 * Renders a single letter with the specified color
 */
function LogoLetter({ color, letter }: { color: string; letter: string }) {
	return <span className={color}>{letter}</span>;
}
