import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AttendeeDashboard from "./pages/organizer/AttendeeDashboard";
import OrganizerDashboard from "./pages/organizer/OrganizerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AttendeeLayout from "./layouts/AttendeeLayout";
import OrganizerLayout from "./layouts/OrganizerLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/attendee"
        element={
          <ProtectedRoute role="attendee">
            <AttendeeLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AttendeeDashboard />} />
      </Route>

      <Route
        path="/organizer"
        element={
          <ProtectedRoute role="organizer">
            <OrganizerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<OrganizerDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
