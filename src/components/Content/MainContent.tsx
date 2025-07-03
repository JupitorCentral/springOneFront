import { useState } from "react";

/**
 * Main content section component
 * Contains the primary greeting, action buttons, and language options
 */
export function MainContent() {
	const [welcomeMessage, setWelcomeMessage] = useState("Hello, world!");
	const [isLoading, setIsLoading] = useState(false);

	const handleFeelingLucky = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"http://localhost:8081/testApi/changeName",
			);
			if (response.ok) {
				const newMessage = await response.text();
				setWelcomeMessage(newMessage);
			}
		} catch (error) {
			console.error("Error fetching from API:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="text-center">
			{/* Primary greeting message */}
			<WelcomeMessage message={welcomeMessage} />

			{/* Primary action buttons */}
			<ActionButtons
				onFeelingLucky={handleFeelingLucky}
				isLoading={isLoading}
			/>

			{/* Language selection links */}
			<LanguageOptions />
		</div>
	);
}

/**
 * Welcome message component
 * Displays the main greeting to users
 */
function WelcomeMessage({ message }: { message: string }) {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-light text-gray-700">{message}</h2>
		</div>
	);
}

/**
 * Action buttons component
 * Provides main search functionality buttons
 */
function ActionButtons({
	onFeelingLucky,
	isLoading,
}: {
	onFeelingLucky: () => void;
	isLoading: boolean;
}) {
	return (
		<div className="flex space-x-4 justify-center">
			<ActionButton text="Google Search" />
			<ActionButton
				text={isLoading ? "Loading..." : "I'm Feeling Lucky"}
				onClick={onFeelingLucky}
				disabled={isLoading}
			/>
		</div>
	);
}

/**
 * Individual action button component
 * Reusable button with consistent styling
 */
function ActionButton({
	text,
	onClick,
	disabled,
}: {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			type="button"
			className={`bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded border border-gray-300 text-sm font-medium ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
			onClick={onClick}
			disabled={disabled}
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
