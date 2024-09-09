import React, { useState } from "react";
import EmailLogin from "../../components/EmailLogin";
import PhoneLogin from "../../components/PhoneLogin";
import "../../login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("email");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-20 mobile-padding desktop-padding">
      <div className="w-full h-full px-2 py-2 space-y-6 items-center">
        <div className="">
          <a href="/" className="flex items-center login-link gap-3 logo">
            <img src="images/logo.svg" alt="Logo" />
            <p>EcoBill</p>
          </a>
        </div>
        <div className="w-full">
          <h2>Welcome Back.</h2>
          <p className="greating">Please enter your details to login.</p>
        </div>
        <div className="rounded-lg text-center w-full bg-white flex items-center px-1 py-1">
          <button
            className={`px-4 py-2 rounded-lg w-full h-14 ${
              activeTab === "email" ? "greenC text-white" : "text-black"
            }`}
            onClick={() => handleTabChange("email")}
          >
            Email Login
          </button>
          <button
            className={`px-4 py-2 rounded-lg w-full h-14 ${
              activeTab === "phone" ? "greenC text-white" : "text-black"
            }`}
            onClick={() => handleTabChange("phone")}
          >
            Phone Login
          </button>
        </div>
        {activeTab === "email" && <EmailLogin />}
        {activeTab === "phone" && <PhoneLogin />}

        <p className="w-full text-center mt-3">
          You don’t have an account yet?{" "}
          <span>
            <a href="/Register" className="login-link">
              Create one.
            </a>
          </span>
        </p>
      </div>
      <div className="w-full hidden md:block">
        <img className="Banner" src="images/loginBanner.png" alt="Home" />
      </div>
    </div>
  );
};

export default Login;
