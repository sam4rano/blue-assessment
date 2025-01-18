"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { House, Redo2 } from 'lucide-react';

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh(); 
  };

  const handleGoHome = () => {
    router.push('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-kanit">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-800 mb-8">Oops! Page not found.</p>
      
      <div className="flex space-x-4">
        <button
          onClick={handleRefresh}
          className="flex items-center px-4 py-2 bg-grey-800 text-whit font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          <Redo2 className="mr-2" />
          Refresh
        </button>

        <button
          onClick={handleGoHome}
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <House className="mr-2" />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
