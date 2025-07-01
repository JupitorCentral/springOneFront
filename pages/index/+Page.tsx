import {
	GoogleLogo,
	MainContent,
	NavigationHeader,
	PageFooter,
} from "@/components";

/**
 * Google-inspired homepage component
 * Orchestrates the main page layout using focused sub-components
 */
export default function Page() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header navigation section */}
			<NavigationHeader />

			{/* Main content area with logo and primary content */}
			<main className="flex-1 flex flex-col items-center justify-center -mt-16">
				{/* Logo section */}
				<GoogleLogo />

				{/* Main content section */}
				<MainContent />
			</main>

			{/* Footer section */}
			<PageFooter />
		</div>
	);
}
