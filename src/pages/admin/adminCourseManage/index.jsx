import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdiminSignIn from "../admin-signin";
import AdminHeader from "../adminHeader";
import CourseManage from "../courseManageComponent";
import Sidebar from "../sidebar";
import "./style.scss";

function AdminCourseManage() {
  // useSelector/useDispatch
  const { renderKey } = useSelector((state) => state.admin);

  // useState
  const [toggleVar, setToggleVar] = useState(true);

  return renderKey === "dashboard" ? (
    <div className="admin-course-manage">
      {/* Header */}
      <div className="header">
        <AdminHeader setToggleVar={setToggleVar} />
      </div>

      {/* Body */}
      <div className="body-admin-course-manage">
        <div className={`${toggleVar ? "sidebar" : "toggle-click"}`}>
          <Sidebar />
        </div>
        <div className="content">
          <CourseManage />
        </div>
      </div>
    </div>
  ) : (
    <AdiminSignIn />
  );
}

export default AdminCourseManage;
