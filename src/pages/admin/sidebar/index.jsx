import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import GavelOutlinedIcon from "@material-ui/icons/GavelOutlined";

function Sidebar() {
  return (
    <div className="cover-sidebar">
      {/* Up */}
      <div className="up">
        <div className="text">
          <p>Management</p>
        </div>
      </div>
      {/* Down */}
      <div className="down">
        <ul>
          <li>
            <NavLink to="/admin/dashboard">
              {" "}
              <DashboardOutlinedIcon /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/user-manage">
              <LocalLibraryOutlinedIcon /> User Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/course-manage">
              <LibraryBooksOutlinedIcon /> Course Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/course-manage">
              <SmsOutlinedIcon /> Messenger
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/course-manage">
              <GavelOutlinedIcon /> Rule
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
