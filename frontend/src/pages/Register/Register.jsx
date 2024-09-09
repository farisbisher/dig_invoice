import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../login.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("966");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8383/auth/signup",
        {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        },
        {
          headers: {
            EcoBillKey: "EcoBillValue",
          },
        }
      );
      navigate("/login");
    } catch (error) {
      console.error("Error occurred during API call:", error);
      setError("Invalid phone number or password");
    }
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
          <h2>Welcome To EcoBill.</h2>
          <p className="greating">Please fill up the form below to sign up.</p>
        </div>
        <div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex space-x-4">
            <div className="mb-4 space-y-1 w-full">
              <label className="block text-gray-700 bold-text">
                First Name:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full px-3 py-3 rounded-lg input-field"
              />
            </div>
            <div className="mb-4 space-y-1 w-full">
              <label className="block text-gray-700 bold-text">
                Last Name:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="w-full px-3 py-3 rounded-lg input-field"
              />
            </div>
          </div>
          <div className="mb-4 space-y-1 w-full">
            <label className="block text-gray-700 bold-text">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-3 rounded-lg input-field"
            />
          </div>
          <div className="flex space-x-4">
            <div className="mb-4 space-y-1 w-full">
              <label className="block text-gray-700 bold-text">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-3 rounded-lg input-field"
              />
            </div>
            <div className="mb-4 space-y-1 w-full">
              <label className="block text-gray-700 bold-text">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="5xxxxxxxxx"
                className="w-full px-3 py-3 rounded-lg input-field"
              />
            </div>
          </div>
          <div className="mb-4 space-y-1 w-full">
            <label className="block text-gray-700 bold-text">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-3 rounded-lg input-field"
            />
          </div>
          <button
            className="px-5 py-4 greenC text-white rounded-lg w-full mt-3"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <p className="w-full text-center mt-3">
          You already have an account?{" "}
          <span>
            <a href="/Login" className="login-link">
              Sign in.
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

export default Register;
