/**
 * Google-inspired homepage component
 * Features a centered layout with a logo area and main greeting message
 */
export default function Page() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header Navigation */}
			<header className="flex justify-end items-center p-4 space-x-4">
				<a href="/" className="text-sm text-gray-700 hover:underline">
					Gmail
				</a>
				<a href="/" className="text-sm text-gray-700 hover:underline">
					Images
				</a>
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
				<button
					type="button"
					className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium"
				>
					Sign in
				</button>
			</header>

			{/* Main Content Area */}
			<main className="flex-1 flex flex-col items-center justify-center -mt-16">
				{/* Logo Section */}
				<div className="mb-8">
					<h1 className="text-8xl font-light text-gray-800 tracking-tight">
						<span className="text-blue-500">G</span>
						<span className="text-red-500">o</span>
						<span className="text-yellow-500">o</span>
						<span className="text-blue-500">g</span>
						<span className="text-green-500">l</span>
						<span className="text-red-500">e</span>
					</h1>
				</div>

				{/* Main Greeting Message */}
				<div className="mb-8">
					<h2 className="text-4xl font-light text-gray-700">
						Hello, world!
					</h2>
				</div>

				{/* Action Buttons */}
				<div className="flex space-x-4">
					<button
						type="button"
						className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded border border-gray-300 text-sm font-medium"
					>
						Google Search
					</button>
					<button
						type="button"
						className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded border border-gray-300 text-sm font-medium"
					>
						I'm Feeling Lucky
					</button>
				</div>

				{/* Language Options */}
				<div className="mt-8 text-sm text-gray-600">
					Google offered in:{" "}
					<a href="/" className="text-blue-600 hover:underline">
						한국어
					</a>{" "}
					<a href="/" className="text-blue-600 hover:underline">
						日本語
					</a>{" "}
					<a href="/" className="text-blue-600 hover:underline">
						中文
					</a>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-gray-100 border-t border-gray-300">
				{/* Country */}
				<div className="px-6 py-4 border-b border-gray-300">
					<span className="text-gray-600 text-sm">South Korea</span>
				</div>

				{/* Footer Links */}
				<div className="px-6 py-4 flex flex-wrap justify-between items-center">
					<div className="flex space-x-6">
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							About
						</a>
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							Advertising
						</a>
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							Business
						</a>
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							How Search works
						</a>
					</div>
					<div className="flex space-x-6">
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							Privacy
						</a>
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							Terms
						</a>
						<a
							href="/"
							className="text-gray-600 text-sm hover:underline"
						>
							Settings
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
