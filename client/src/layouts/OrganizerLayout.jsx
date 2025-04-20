import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const OrganizerLayout = () => (
  <>
    <Navbar role="organizer" />
    <main className="p-6">
      <Outlet />
    </main>
  </>
);

export default OrganizerLayout;
