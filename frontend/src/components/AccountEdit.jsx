import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountEdit = ({ customerId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
      axios.patch(
        `http://localhost:8383/auth/${customerId}`,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            EcoBillKey: "EcoBillValue",
          },
        }
      );
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Error occurred during API call:", error);
      setError("Invalid phone number or password");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-20">
      <div className="w-full h-full px-2 py-2 space-y-6 items-center">
        <div className="w-full">
          <h2>Manage You Account</h2>
          <p className="greating">Change Your Information Here:</p>
        </div>
        <div>
          {error && <div className="text-red-500">{error}</div>}
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
            className="px-1 py-3 greenC text-white rounded-lg w-full mt-3"
            onClick={handleEdit}
          >
            Edit Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountEdit;
