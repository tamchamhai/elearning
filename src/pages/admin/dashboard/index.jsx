import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import AdiminSignIn from "../admin-signin";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  getUserAdminPage,
  postAdminLogout,
} from "../../../store/actions/admin.action";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { userAdminPage } = useSelector((state) => state.admin);
  const [toggle, setToggle] = useState("");
  const [page, setPage] = useState({
    groupID: "GP01",
    pageNum: "1",
    searchKey: null,
  });
  const handleGroupID = (event) => {
    const { value } = event.target;
    setPage({ ...page, groupID: value });
  };
  const handlePickPage = (num) => {
    setPage({ ...page, pageNum: num });
  };
  const handleSearchKey = (event) => {
    const { value } = event.target;
    setPage({ ...page, searchKey: value });
    console.log(page.searchKey);
    console.log(userAdminPage);
  };

  const handleToggleSidebar = () => {
    toggle === "-open" ? setToggle("") : setToggle("-open");
  };

  const handleAdminLogout = () => {
    console.log("logout");
    localStorage.removeItem("adminSignin");
    dispatch(postAdminLogout("signin"));
  };

  const { renderKey } = useSelector((state) => state.admin);
  const { adminSignin } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getUserAdminPage(page.groupID, page.pageNum, page.searchKey));
  }, [page]);

  // Render signin form
  const renderAdminSignin = () => {
    return <AdiminSignIn />;
  };

  // Render Dashboard
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
              <div className="user-login">
                <p>Hello! {adminSignin.hoTen}</p>
                <div className="avatar">
                  <img
                    src="https://source.unsplash.com/random"
                    alt="img admin"
                  />
                </div>
                <div className="logout-icon" onClick={handleAdminLogout}>
                  <ExitToAppIcon />
                </div>
              </div>
            </div>

            <div className="table-content">
              <div className="cover-content">
                <div className="title">
                  <h1>User Management</h1>
                  <div className="btns">
                    <div className="groupID">
                      <form className="groupForm">
                        <label htmlFor="selectGroup"></label>
                        <select
                          className="selectGroup"
                          name="selectGroup"
                          onChange={handleGroupID}
                        >
                          <option value="GP01" className="item">
                            GP01
                          </option>
                          <option value="GP02" className="item">
                            GP02
                          </option>
                          <option value="GP03" className="item">
                            GP03
                          </option>
                          <option value="GP04" className="item">
                            GP04
                          </option>
                          <option value="GP05" className="item">
                            GP05
                          </option>
                          <option value="GP06" className="item">
                            GP06
                          </option>
                          <option value="GP07" className="item">
                            GP07
                          </option>
                        </select>
                      </form>
                    </div>
                    <button>Add User</button>
                  </div>
                </div>
                <div className="search-bar">
                  <input
                    type="text"
                    name="search"
                    placeholder="Username"
                    onChange={handleSearchKey}
                  />
                  <button>
                    <SearchIcon />
                  </button>
                </div>
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
                <div className="list-page">
                  <ul>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(1);
                      }}
                    >
                      1
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(2);
                      }}
                    >
                      2
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(3);
                      }}
                    >
                      3
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(4);
                      }}
                    >
                      4
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(5);
                      }}
                    >
                      5
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(6);
                      }}
                    >
                      6
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(7);
                      }}
                    >
                      7
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(8);
                      }}
                    >
                      8
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(9);
                      }}
                    >
                      9
                    </li>
                    <li
                      className="item"
                      onClick={() => {
                        handlePickPage(10);
                      }}
                    >
                      10
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // render signin form or dashboard
  const mainRender = () => {
    if (renderKey === "signin") {
      return renderAdminSignin();
    }
    if (renderKey === "dashboard") {
      return renderDashboard();
    }
  };

  return mainRender();
}
