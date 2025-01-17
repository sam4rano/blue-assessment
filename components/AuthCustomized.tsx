"use client";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const AuthCustomized: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="w-full bg-primary_lighter flex flex-col gap-y-8 py-4 justify-center align-middle items-center min-h-screen">
      {children}
    </div>
  );
};

export default AuthCustomized;
