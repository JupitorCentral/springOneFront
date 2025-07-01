/**
 * Page footer component
 * Contains country information and footer navigation links
 */
export function PageFooter() {
	return (
		<footer className="bg-gray-100 border-t border-gray-300">
			{/* Country information section */}
			<CountryInfo />

			{/* Footer navigation links */}
			<FooterNavigation />
		</footer>
	);
}

/**
 * Country information component
 * Displays the current country/region
 */
function CountryInfo() {
	return (
		<div className="px-6 py-4 border-b border-gray-300">
			<span className="text-gray-600 text-sm">South Korea</span>
		</div>
	);
}

/**
 * Footer navigation component
 * Contains left and right aligned footer links
 */
function FooterNavigation() {
	return (
		<div className="px-6 py-4 flex flex-wrap justify-between items-center">
			{/* Left side footer links */}
			<LeftFooterLinks />

			{/* Right side footer links */}
			<RightFooterLinks />
		</div>
	);
}

/**
 * Left side footer links component
 * Groups company and business-related links
 */
function LeftFooterLinks() {
	const leftLinks = [
		{ href: "/", text: "About" },
		{ href: "/", text: "Advertising" },
		{ href: "/", text: "Business" },
		{ href: "/", text: "How Search works" },
	];

	return (
		<div className="flex space-x-6">
			{leftLinks.map((link) => (
				<FooterLink key={link.text} href={link.href} text={link.text} />
			))}
		</div>
	);
}

/**
 * Right side footer links component
 * Groups user and legal-related links
 */
function RightFooterLinks() {
	const rightLinks = [
		{ href: "/", text: "Privacy" },
		{ href: "/", text: "Terms" },
		{ href: "/", text: "Settings" },
	];

	return (
		<div className="flex space-x-6">
			{rightLinks.map((link) => (
				<FooterLink key={link.text} href={link.href} text={link.text} />
			))}
		</div>
	);
}

/**
 * Footer link component
 * Reusable link with consistent footer styling
 */
function FooterLink({ href, text }: { href: string; text: string }) {
	return (
		<a href={href} className="text-gray-600 text-sm hover:underline">
			{text}
		</a>
	);
}
