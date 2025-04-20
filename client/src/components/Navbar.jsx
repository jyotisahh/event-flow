import React from "react";

const Navbar = ({ userRole }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">EventFlow</h1>
      <div>
        {userRole === "attendee" && <span>Attendee Dashboard</span>}
        {userRole === "organizer" && <span>Organizer Dashboard</span>}
      </div>
    </nav>
  );
};

export default Navbar;
