import React, { useState } from "react";
import "./style.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import AdiminSignIn from "../admin-signin";

export default function Dashboard() {
  const [toggle, setToggle] = useState("");
  const handleToggleSidebar = () => {
    toggle === "-open" ? setToggle("") : setToggle("-open");
  };
  const [isSignin, setIsSignin] = useState("signin");

  const renderAdminSignin = () => {
    return <AdiminSignIn />;
  };
  const renderDashboard = () => {
    return (
      <div className="dashboard">
        <div className="cover-dashboard">
          <div className={`sidebar${toggle}`}>
            <div className="navbar-logo">
              <div className="toggle-btn">
                <button onClick={handleToggleSidebar}>
                  <ReorderIcon />
                </button>
              </div>
              <div className="logo">
                <span className="logo-part-one">E</span>
                <span className="logo-part-two">Learn</span>
              </div>
            </div>

            <div className="menu">
              <ul>
                <li className="menu-item">
                  <a href="#">
                    <AssignmentIndIcon />
                    <span>User Management</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#">
                    <ChromeReaderModeIcon />
                    <span>Courses Management</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="cover-content">
            <div className="header">
              <div className="toggle-btn">
                <button onClick={handleToggleSidebar}>
                  <ReorderIcon />
                </button>
              </div>
              <div className="user-login"></div>
            </div>

            <div className="table-content">
              <div className="cover-content">
                <div className="title"></div>
                <div className="search-bar"></div>
                <div className="table-list">
                  <table className="user-table">
                    <thead className="table-head text-primary">
                      <tr>
                        <th className="head-item">No.</th>
                        <th className="head-item">Username</th>
                        <th className="head-item">Password</th>
                        <th className="head-item">Fullname</th>
                        <th className="head-item">Email</th>
                        <th className="head-item">Phone </th>
                        <th className="head-item">
                          <SettingsIcon />
                        </th>
                      </tr>
                    </thead>
                    <tbody className="table-body" id="tableDanhSach"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const mainRender = () => {
    if (isSignin === "signin") {
      return renderAdminSignin();
    } else {
      return renderDashboard();
    }
  };

  return mainRender();
}
