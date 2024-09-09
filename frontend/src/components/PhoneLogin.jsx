import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("966");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8383/auth/login/phone_number",
        {
          phoneNumber: phoneNumber,
          password: password,
        },
        {
          headers: {
            EcoBillKey: "EcoBillValue",
          },
        }
      );
      console.log(response);
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        const userId = response.data.id;
        localStorage.setItem("token", token);
        setId(userId);
        navigate("/dashboard", { state: { id: userId } });
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      console.error("Error occurred during API call:", error);
      setError("Invalid phone number or password");
    }
  };

  return (
    <div className="space-y-3">
      {error && <div className="text-red-500">{error}</div>}
      <div className="mb-4 space-y-1">
        <label className="block text-gray-700 bold-text">Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full px-3 py-3 rounded-lg input-field"
        />
      </div>
      <div className="mb-4 space-y-1">
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
        onClick={handleLogin}
        className="px-5 py-4 greenC text-white rounded-lg w-full"
      >
        Login
      </button>
    </div>
  );
};

export default PhoneLogin;
