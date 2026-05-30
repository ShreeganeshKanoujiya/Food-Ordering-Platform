import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-lg w-full text-center p-8 bg-white rounded-lg shadow">
                <div className="flex items-center justify-center h-40">
                    <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page not found</h2>
                <p className="mt-2 text-gray-500">Sorry — the page you were looking for doesn't exist.</p>
                <a
                    href="/"
                    className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    Go back home
                </a>
            </div>
        </div>
    );
};

export default Error;