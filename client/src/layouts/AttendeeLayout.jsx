import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AttendeeLayout = () => (
  <>
    <Navbar role="attendee" />
    <main className="p-6">
      <Outlet />
    </main>
  </>
);

export default AttendeeLayout;
