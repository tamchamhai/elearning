import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdiminSignIn from "../admin-signin";
import AdminHeader from "../adminHeader";
import Sidebar from "../sidebar";
import UserManage from "../userManageComponent";
import "./style.scss";

function AdminUserManage() {
  // useSelector/useDispatch
  const { renderKey } = useSelector((state) => state.admin);

  // useState
  const [toggleVar, setToggleVar] = useState(true);

  // ComponentDidMount

  return renderKey === "dashboard" ? (
    <div className="admin-user-manage">
      {/* Header */}
      <div className="header">
        <AdminHeader setToggleVar={setToggleVar} />
      </div>

      {/* Body */}
      <div className="body-admin-user-manage">
        <div className={`${toggleVar ? "sidebar" : "toggle-click"}`}>
          <Sidebar />
        </div>
        <div className="content">
          <UserManage />
        </div>
      </div>
    </div>
  ) : (
    <AdiminSignIn />
  );
}

export default AdminUserManage;
