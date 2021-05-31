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
import Chart from "react-google-charts";
import BarChartjs from "../../../components/chart/bar";

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
          <div className="google-chart-one d-none">
            <div className="user-chart">
              <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["City", "2010 Population", "2000 Population"],
                  ["New York City, NY", 8175000, 8008000],
                  ["Los Angeles, CA", 3792000, 3694000],
                  ["Chicago, IL", 2695000, 2896000],
                  ["Houston, TX", 2099000, 1953000],
                  ["Philadelphia, PA", 1526000, 1517000],
                ]}
                options={{
                  title: "Population of Largest U.S. Cities",
                  chartArea: { width: "30%" },
                  hAxis: {
                    title: "Total Population",
                    minValue: 0,
                  },
                  vAxis: {
                    title: "City",
                  },
                }}
                legendToggle
              />
            </div>
            <div className="course-chart">
              <Chart
                width={400}
                height={"300px"}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Year", "Sales", "Expenses"],
                  ["2013", 1000, 400],
                  ["2014", 1170, 460],
                  ["2015", 660, 1120],
                  ["2016", 1030, 540],
                ]}
                options={{
                  title: "Company Performance",
                  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                  vAxis: { minValue: 0 },
                  // For the legend to fit, we make the chart area smaller
                  chartArea: { width: "50%", height: "70%" },
                  // lineWidth: 25
                }}
              />
            </div>
          </div>
          <div className="google-chart-two d-none">
            <div className="profit-chart">
              <h1>Profit chart</h1>
              <Chart
                width={800}
                height={300}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: "number", label: "x" },
                    { type: "number", label: "values" },
                    { id: "i0", type: "number", role: "interval" },
                    { id: "i1", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                  ],
                  [1, 100, 90, 110, 85, 96, 104, 120],
                  [2, 120, 95, 130, 90, 113, 124, 140],
                  [3, 130, 105, 140, 100, 117, 133, 139],
                  [4, 90, 85, 95, 85, 88, 92, 95],
                  [5, 70, 74, 63, 67, 69, 70, 72],
                  [6, 30, 39, 22, 21, 28, 34, 40],
                  [7, 80, 77, 83, 70, 77, 85, 90],
                  [8, 100, 90, 110, 85, 95, 102, 110],
                ]}
                options={{
                  intervals: { style: "sticks" },
                  legend: "none",
                }}
              />
            </div>
          </div>
          <div className="chart-js">
            <div className="bar-chart">
              <h1>Total Views Per Month</h1>
              <BarChartjs />
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
