import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8383/auth/login/email",
        {
          email: email,
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
      setError("Invalid Email or password");
    }
  };

  return (
    <div className="space-y-3">
      {error && <div className="text-red-500">{error}</div>}
      <div className="mb-4 space-y-1">
        <label className="block text-gray-700 bold-text">Email Login:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
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

export default EmailLogin;
