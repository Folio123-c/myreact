import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">The page you are looking for does not exist.</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => window.history.back()}
            >
                Go Back
            </button>
            <Link
                to="/"
                className="mt-4 text-blue-500 hover:underline"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
