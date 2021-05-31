import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  courseKeyModal,
  courseModal,
  deleteCourse,
  getCourseAdminPage,
  getUserList,
} from "../../../store/actions/admin.action";
import PageNotFound from "../../../components/page-not-found";
import ModalCourse from "../../../components/admin/modal-course";

function CourseManage() {
  const dispatch = useDispatch();
  const { courseAdminPage } = useSelector((state) => state.admin);
  const { deleteCourseAdmin } = useSelector((state) => state.admin);
  const { addCourseAdmin } = useSelector((state) => state.admin);
  const token = JSON.parse(localStorage.getItem("adminSignin")).accessToken;

  // useState
  const [pageIndex, setPageIndex] = useState({
    index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    selectedIndex: 1,
  });
  const [getCourse, setGetCourse] = useState({
    pageIndex: 1,
    group: "GP03",
    searchKey: null,
  });
  const [addEditCourse, setAddEditCourse] = useState({
    course: null,
    key: "",
  });

  // Handle function
  const handlePageSelect = (index) => {
    setPageIndex({ ...pageIndex, selectedIndex: index });
    setGetCourse({ ...getCourse, pageIndex: index });
  };
  const handleDeleteCourse = (courseID) => {
    dispatch(deleteCourse(courseID, token));
  };
  const handleAddCourse = () => {
    dispatch(courseModal({}));
    dispatch(courseKeyModal("add_key"));
  };
  const handleEditCourse = (course) => {
    dispatch(courseModal(course));
    dispatch(courseKeyModal("edit_key"));
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
  const renderCourseList = () => {
    return courseAdminPage?.map((course, index) => {
      return (
        <tr
          key={index}
          className={`trow ${index % 2 === 0 ? "bg-list-course" : ""}`}
        >
          <th className="item" scope="row">
            <div className="courseImg">
              <img src={course.hinhAnh} alt="Oops!" />
              <div className="courseName">
                <h3>{course.tenKhoaHoc}</h3>
                <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
              </div>
            </div>
          </th>
          <td className="item">
            <div className="creator">
              <h3>{course.nguoiTao.hoTen}</h3>
              <p>Views: {course.luotXem}</p>
            </div>
          </td>
          <td className="item">
            <div className="date">{course.ngayTao}</div>
          </td>
          <td className="item">
            <div className="switch-btn">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
          </td>
          <td className="item">
            <div className="action">
              <span className="action-btns register">register</span>
              <span
                className="action-btns edit"
                id="edit-user"
                data-toggle="modal"
                data-target="#staticBackdrop"
                onClick={() => {
                  handleEditCourse(course);
                }}
              >
                edit
              </span>
              <span
                className="action-btns delete"
                onClick={() => {
                  handleDeleteCourse(course.maKhoaHoc);
                }}
              >
                delete
              </span>
            </div>
          </td>
        </tr>
      );
    });
  };

  // componentDidmount
  useEffect(() => {
    dispatch(
      getCourseAdminPage(
        getCourse.searchKey,
        getCourse.pageIndex,
        getCourse.group
      )
    );
    dispatch(getUserList());
  }, [
    getCourse.searchKey,
    getCourse.pageIndex,
    getCourse.group,
    deleteCourseAdmin,
    addCourseAdmin,
  ]);

  return (
    <div className="cover-course-manage">
      <ModalCourse />
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
            </select>
          </div>
          <button
            data-toggle="modal"
            data-target="#staticBackdrop"
            onClick={handleAddCourse}
          >
            add course
          </button>
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
              <option value="BackEnd">BackEnd</option>
              <option value="Design">Design</option>
              <option value="DiDong">DiDong</option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="TuDuy">TuDuy</option>
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
          <table class="table">
            <thead className="head-table text-primary">
              <tr>
                <th className="item" scope="col">
                  Course
                </th>
                <th className="item" scope="col">
                  Created by
                </th>
                <th className="item" scope="col">
                  Published at
                </th>
                <th className="item" scope="col">
                  Display
                </th>
                <th className="item" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="body-table">{renderCourseList()}</tbody>
          </table>
          <div
            className={`${
              courseAdminPage?.length === 0 ? "page-dblock" : "page-dnone"
            }`}
          >
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
