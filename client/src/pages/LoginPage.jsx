import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("attendee");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email, role);
    if (role === "attendee") {
      navigate("/attendee");
    } else if (role === "organizer") {
      navigate("/organizer");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        >
          <option value="attendee">Attendee</option>
          <option value="organizer">Organizer</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
        <p className="text-xs mt-3 text-center">
          Don't have an account? <a href="/register" className="text-blue-600 underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
