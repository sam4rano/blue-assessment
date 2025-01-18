"use client";
import Link from "next/link";
import React from "react";
import { House } from "lucide-react";


type ErrorProps = {
  error: Error & { Digest?: string };
  refresh: () => void;
};

const error: React.FC<ErrorProps> = ({ refresh }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-dark  text-white font-kanit">
      <div className="max-w-lg text-center flex flex-col">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-8">
          Something went wrong:{" "}
          <span className="text-red-400"></span>
        </p>
        <div className="flex flex-row gap-4 justify-center align-middle items-center">
          <button
            onClick={() => refresh()}
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Try Again
          </button>
          <Link href="/">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              <House className="mr-2" />
              Go to Home
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-gray-300 text-sm">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default error;
