import Login from "@/app/containers/auth/Login";
import AuthCustomized from "@/components/AuthCustomized";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <AuthCustomized
    
    >
      <Login />
      <Footer />
    </AuthCustomized>
  );
};

export default page;
