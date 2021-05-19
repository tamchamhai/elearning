import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { getCourseAdminPage } from "../../../store/actions/admin.action";
import PageNotFound from "../../../components/page-not-found";

function CourseManage() {
  const dispatch = useDispatch();
  const { courseAdminPage } = useSelector((state) => state.admin);
  const { error } = useSelector((state) => state.admin);
  // useState
  const [pageIndex, setPageIndex] = useState({
    index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    selectedIndex: 1,
  });
  const [getCourse, setGetCourse] = useState({
    pageIndex: 1,
    group: "GP01",
    searchKey: null,
  });

  // Handle function
  const handlePageSelect = (index) => {
    setPageIndex({ ...pageIndex, selectedIndex: index });
    setGetCourse({ ...getCourse, pageIndex: index });
  };

  // Render function
  const renderPageIndex = () => {
    return pageIndex.index.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            handlePageSelect(item);
          }}
          className={`${
            pageIndex.selectedIndex === item ? "select-class" : ""
          }`}
        >
          <span>{item}</span>
        </li>
      );
    });
  };
  const renderCoursePageIndex = () => {};

  // componentDidmount
  useEffect(() => {
    dispatch(
      getCourseAdminPage(
        getCourse.searchKey,
        getCourse.pageIndex,
        getCourse.group
      )
    );
  }, [getCourse.searchKey, getCourse.pageIndex, getCourse.group]);

  return (
    <div className="cover-course-manage">
      {/* Title */}
      <div className="title-course">
        <h1>courses management</h1>
        <div className="add-course-btn">
          <div className="groupID">
            <select
              className="groupID"
              id="groupID-course"
              onChange={(event) => {
                const { value } = event.target;
                setGetCourse({ ...getCourse, group: value });
              }}
            >
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
            </select>
          </div>
          <button>add course</button>
        </div>
      </div>
      {/* Content */}
      <div className="course-table-content">
        {/* search */}
        <div className="searchbar">
          <div className="catagories">
            <select
              className="select-category"
              id="categories"
              name="categories"
            >
              <option value="GP01">FrontEnd</option>
              <option value="GP02">BackEnd</option>
              <option value="GP03">Photoshop</option>
              <option value="GP04">Dev-ops</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
            </select>
          </div>
          <div className="search-section">
            <input
              type="search"
              placeholder="Course"
              onChange={(event) => {
                const { value } = event.target;
                setGetCourse({ ...getCourse, searchKey: value });
              }}
            />
            <span>
              <SearchIcon />
            </span>
          </div>
        </div>
        {/* render user list */}
        <div className="user-table">
          <table>
            <thead className="head-table text-primary">
              <tr>
                <th className="item">Course</th>
                <th className="item">Created by</th>
                <th className="item">Published at</th>
                <th className="item">Display</th>
                <th className="item">Action</th>
              </tr>
            </thead>
            <tbody className="body-table">{renderCoursePageIndex()}</tbody>
          </table>
          <div className={`${courseAdminPage ? "page-dblock" : "page-dnone"}`}>
            <PageNotFound />
          </div>
        </div>
        {/* render page index */}
        <div className="page-index">
          <ul>{renderPageIndex()}</ul>
        </div>
      </div>
    </div>
  );
}

export default CourseManage;
