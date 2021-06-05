import React, { useState } from "react";
import AdiminSignIn from "../admin-signin";
import AdminHeader from "../adminHeader";
import Sidebar from "../sidebar";
import { useSelector } from "react-redux";
import "./style.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import BarChartjs from "../../../components/chart/bar";
import PolarChartJs from "../../../components/chart/polar";
import DoughnutChartJs from "../../../components/chart/donut";

function Dashboard() {
  // useSelector/useDispatch
  const { renderKey } = useSelector((state) => state.admin);

  // useState
  const [toggleVar, setToggleVar] = useState(true);

  return renderKey === "dashboard" ? (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <AdminHeader setToggleVar={setToggleVar} />
      </div>

      {/* Body */}
      <div className="body-dashboard">
        <div className={`${toggleVar ? "sidebar" : "toggle-click"}`}>
          <Sidebar />
        </div>
        <div className="content-dashboard">
          {/* Banner */}
          <h1 className="dashboard-heading">
            <ImportantDevicesIcon />
            My Dashboard
          </h1>
          <div className="dashboard-banner">
            <div className="banner-comment banner">
              <div className="heading">
                <div className="icon">
                  <QuestionAnswerOutlinedIcon />
                </div>
                <div className="text">
                  <h3>202</h3>
                  <p>New Comments</p>
                </div>
              </div>
              <div className="footing">
                <div className="viewdetail">View detail</div>
                <div className="arrow-right">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>

            <div className="banner-user banner">
              <div className="heading">
                <div className="icon">
                  <StorageOutlinedIcon />
                </div>
                <div className="text">
                  <h3>2023</h3>
                  <p>New Users</p>
                </div>
              </div>
              <div className="footing">
                <div className="viewdetail">View detail</div>
                <div className="arrow-right">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>

            <div className="banner-course banner">
              <div className="heading">
                <div className="icon">
                  <CollectionsBookmarkOutlinedIcon />
                </div>
                <div className="text">
                  <h3>123</h3>
                  <p>New Courses</p>
                </div>
              </div>
              <div className="footing">
                <div className="viewdetail">View detail</div>
                <div className="arrow-right">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>

            <div className="banner-messenger banner">
              <div className="heading">
                <div className="icon">
                  <EmailOutlinedIcon />
                </div>
                <div className="text">
                  <h3>2023</h3>
                  <p>New Email</p>
                </div>
              </div>
              <div className="footing">
                <div className="viewdetail">View detail</div>
                <div className="arrow-right">
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
          {/* Chart */}
          <div className="chart-js">
            <div className="bar-chart">
              <h1>Total Views Per Month</h1>
              <BarChartjs />
            </div>
            <div className="cover-chart">
              <div className="polar-chart">
                <h1>Total New Course Per Month</h1>
                <PolarChartJs />
              </div>
              <div className="donut-chart">
                <h1>Total New Student Per Month</h1>
                <DoughnutChartJs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <AdiminSignIn />
  );
}

export default Dashboard;
