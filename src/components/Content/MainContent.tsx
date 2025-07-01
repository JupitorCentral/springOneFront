/**
 * Main content section component
 * Contains the primary greeting, action buttons, and language options
 */
export function MainContent() {
	return (
		<div className="text-center">
			{/* Primary greeting message */}
			<WelcomeMessage />

			{/* Primary action buttons */}
			<ActionButtons />

			{/* Language selection links */}
			<LanguageOptions />
		</div>
	);
}

/**
 * Welcome message component
 * Displays the main greeting to users
 */
function WelcomeMessage() {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-light text-gray-700">Hello, world!</h2>
		</div>
	);
}

/**
 * Action buttons component
 * Provides main search functionality buttons
 */
function ActionButtons() {
	return (
		<div className="flex space-x-4 justify-center">
			<ActionButton text="Google Search" />
			<ActionButton text="I'm Feeling Lucky" />
		</div>
	);
}

/**
 * Individual action button component
 * Reusable button with consistent styling
 */
function ActionButton({ text }: { text: string }) {
	return (
		<button
			type="button"
			className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded border border-gray-300 text-sm font-medium"
		>
			{text}
		</button>
	);
}

/**
 * Language options component
 * Displays available language alternatives
 */
function LanguageOptions() {
	const languages = [
		{ code: "ko", name: "한국어" },
		{ code: "ja", name: "日本語" },
		{ code: "zh", name: "中文" },
	];

	return (
		<div className="mt-8 text-sm text-gray-600">
			Google offered in:{" "}
			{languages.map((language, index) => (
				<span key={language.code}>
					<LanguageLink href="/" text={language.name} />
					{index < languages.length - 1 && " "}
				</span>
			))}
		</div>
	);
}

/**
 * Language link component
 * Individual language selection link
 */
function LanguageLink({ href, text }: { href: string; text: string }) {
	return (
		<a href={href} className="text-blue-600 hover:underline">
			{text}
		</a>
	);
}
