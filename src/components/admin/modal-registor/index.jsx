import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import "./style.scss";
import {
  postCourseCancelRegister,
  postCourseRegister,
  postUserRegistered,
} from "../../../store/actions/register.action";

function RegistorModal() {
  const dispatch = useDispatch();
  const { courseNotRegister } = useSelector((state) => state.register);
  const { userNotRegister } = useSelector((state) => state.register);
  const { courseConfirmed } = useSelector((state) => state.register);
  const { userConfirmed } = useSelector((state) => state.register);
  const { coursePending } = useSelector((state) => state.register);
  const { userPending } = useSelector((state) => state.register);
  const { registerUser } = useSelector((state) => state.register);
  const { registerCourse } = useSelector((state) => state.register);
  const { keyRegister } = useSelector((state) => state.register);
  const { actionSuccess } = useSelector((state) => state.register);
  const token = JSON.parse(localStorage.getItem("adminSignin")).accessToken;

  // useState
  const [courseReg, setCourseReg] = useState({
    courseID: "",
  });
  const [userReg, setUserReg] = useState({
    userName: "",
  });

  // Handle function
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (keyRegister === "user-manage") {
      setCourseReg({ ...courseReg, [name]: value });
    } else if (keyRegister === "course-manage") {
      setUserReg({ ...userReg, [name]: value });
    }
  };

  // Render function
  const renderCourseNotRegister = () => {
    if (keyRegister === "user-manage") {
      return courseNotRegister?.map((item, index) => {
        return (
          <option value={`${item.maKhoaHoc}`} key={index}>
            {item.maKhoaHoc}
          </option>
        );
      });
    } else if (keyRegister === "course-manage") {
      return userNotRegister?.map((item, index) => {
        return (
          <option value={`${item.taiKhoan}`} key={index}>
            {item.taiKhoan}
          </option>
        );
      });
    }
  };
  const renderCourseComfirmed = () => {
    if (keyRegister === "user-manage") {
      if (courseConfirmed.length !== 0) {
        return courseConfirmed?.map((item, index) => {
          return (
            <tr key={index}>
              <th className="item">{index + 1}</th>
              <th className="item">{item.tenKhoaHoc}</th>
              <th className="item">
                <span
                  className="delete-btn"
                  onClick={() => {
                    dispatch(
                      postCourseCancelRegister(
                        registerUser.taiKhoan,
                        item.maKhoaHoc,
                        token
                      )
                    );
                  }}
                >
                  <CloseIcon />
                </span>
              </th>
            </tr>
          );
        });
      }
    } else if (keyRegister === "course-manage") {
      if (userConfirmed.length !== 0) {
        return userConfirmed?.map((item, index) => {
          return (
            <tr key={index}>
              <th className="item">{index + 1}</th>
              <th className="item">{item.hoTen}</th>
              <th className="item">
                <span
                  className="delete-btn"
                  onClick={() => {
                    dispatch(
                      postCourseCancelRegister(
                        item.taiKhoan,
                        registerCourse.maKhoaHoc,
                        token
                      )
                    );
                  }}
                >
                  <CloseIcon />
                </span>
              </th>
            </tr>
          );
        });
      }
    }
  };
  const renderCoursePending = () => {
    if (keyRegister === "user-manage") {
      return coursePending?.map((item, index) => {
        return (
          <tr key={index}>
            <th className="item">{index + 1}</th>
            <th className="item">{item.tenKhoaHoc}</th>
            <th className="item">
              <span className="check-btn">
                <DoneIcon />
              </span>
              <span
                className="delete-btn"
                onClick={() => {
                  dispatch(
                    postCourseCancelRegister(
                      registerCourse.maKhoaHoc,
                      item.taiKhoan,
                      token
                    )
                  );
                }}
              >
                <CloseIcon />
              </span>
            </th>
          </tr>
        );
      });
    } else if (keyRegister === "course-manage") {
      return userPending?.map((item, index) => {
        return (
          <tr key={index}>
            <th className="item">{index + 1}</th>
            <th className="item">{item.taiKhoan}</th>
            <th className="item">
              <span className="check-btn">
                <DoneIcon />
              </span>
              <span
                className="delete-btn"
                onClick={() => {
                  dispatch(
                    postCourseCancelRegister(
                      registerCourse.maKhoaHoc,
                      item.taiKhoan,
                      token
                    )
                  );
                }}
              >
                <CloseIcon />
              </span>
            </th>
          </tr>
        );
      });
    }
  };

  useEffect(() => {}, [actionSuccess]);
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="registorCourseModal"
        tabIndex={-1}
        aria-labelledby="modalRegisterCourse"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-register">
              <h5 className="modal-title" id="modalRegisterCourse">
                Registor Board
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body-register">
              <div className="part-one">
                <h1>
                  {keyRegister === "user-manage"
                    ? "Choose Course"
                    : "Choose User"}
                </h1>
                <div className="selector">
                  <select
                    name="courseID"
                    id="groupID-register"
                    onChange={handleOnChange}
                  >
                    {renderCourseNotRegister()}
                  </select>
                  <span
                    className="btn-register btn btn-primary"
                    onClick={() => {
                      if (keyRegister === "user-manage") {
                        dispatch(
                          postCourseRegister(
                            courseReg.courseID,
                            registerUser.taiKhoan,
                            token
                          )
                        );
                      } else if (keyRegister === "course-manage") {
                        dispatch(
                          postCourseRegister(
                            registerCourse.maKhoaHoc,
                            userReg.userName,
                            token
                          )
                        );
                      }
                    }}
                  >
                    Register
                  </span>
                </div>
              </div>
              <div className="part-two">
                <h1>
                  {keyRegister === "user-manage"
                    ? "Pending Courses"
                    : "User waiting for approve"}
                </h1>
                <div className="course-register-table">
                  <table className="table">
                    <thead className="head-table-register text-primary">
                      <tr>
                        <th className="item">No.</th>
                        <th className="item">Course Name</th>
                        <th className="item">Action</th>
                      </tr>
                    </thead>
                    <tbody className="body-table-register">
                      {renderCoursePending()}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="part-three">
                <h1>
                  {keyRegister === "user-manage"
                    ? "Registered courses"
                    : "Registered users"}
                </h1>
                <div className="course-register-table">
                  <table className="table">
                    <thead className="head-table-register text-primary">
                      <tr>
                        <th className="item">No.</th>
                        <th className="item">
                          {keyRegister === "user-manage"
                            ? "Course name"
                            : "User"}
                        </th>
                        <th className="item">Action</th>
                      </tr>
                    </thead>
                    <tbody className="body-table-register">
                      {renderCourseComfirmed()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistorModal;
