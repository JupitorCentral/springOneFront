/**
 * Error page component
 * Displays a user-friendly error message when something goes wrong
 */
export default function ErrorPage({ error }: { error: Error }) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full text-center">
				<h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>

				<h2 className="text-2xl font-semibold text-gray-600 mb-6">
					Something went wrong
				</h2>

				<div className="bg-white rounded-lg shadow-lg p-6 mb-6">
					<p className="text-gray-500 text-sm mb-4">
						{error.message || "An unexpected error occurred"}
					</p>

					<button
						type="button"
						onClick={() => window.location.reload()}
						className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
					>
						Try Again
					</button>
				</div>

				<a href="/" className="text-blue-600 hover:underline">
					← Back to Home
				</a>
			</div>
		</div>
	);
}
