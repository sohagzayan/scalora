import React from "react";

export default function ComingSoon() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold mb-4 text-brand-400">Coming Soon</h1>
                <p className="text-lg text-gray-300 mb-6">
                    We are working hard to bring you something amazing. Stay tuned for updates!
                </p>
                <div className="relative w-full max-w-md mx-auto">
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded-md border bg-gray-800 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="Enter your email to get notified"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-brand-400 hover:bg-brand-500 rounded-md text-white">
                        Notify Me
                    </button>
                </div>
            </div>
        </div>
    );
}
