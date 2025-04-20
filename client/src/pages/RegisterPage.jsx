import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("attendee");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email) return alert("Email is required.");
    register(email, role);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
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
          onClick={handleRegister}
          className="w-full bg-green-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
