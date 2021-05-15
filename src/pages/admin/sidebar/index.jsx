import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="cover-sidebar">
      {/* Up */}
      <div className="up">
        <div className="text">
          <p>wellcome to Elearn!</p>
        </div>
      </div>
      {/* Down */}
      <div className="down">
        <ul>
          <li>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/user-manage">User Management</NavLink>
          </li>
          <li>
            <NavLink to="/admin/course-manage">Course Management</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
