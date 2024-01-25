"use client"; 
// page.js

import { useState } from 'react';

// use client
export default function Home() {
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (password === 'schedule123') {
      // Since we can't use useRouter in this Server Component,
      // we'll use window.location to navigate on the client side.
      window.location.href = '/dashboard';
    } else {
      // Implement more secure error handling
      console.error('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Schedule "R" Us
          </h2>
        </div>
        <div className="mt-8 space-y-6 bg-white shadow-md rounded-md px-10 py-8">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            required
          />
          <button
            onClick={handleLogin}
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
