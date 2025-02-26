export default function InternalServerError() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-red-600">500</h1>
            <p className="text-xl text-gray-700 mt-2">Internal Server Error</p>
            <p className="text-gray-500 mt-4">Something went wrong on our end. Please try again later.</p>
        </div>
    );
}