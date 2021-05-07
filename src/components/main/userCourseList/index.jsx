import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCancelRegisterCourse } from "../../../store/actions/courses.action";
import { getUserDetail } from "../../../store/actions/user.action";
import "./style.scss";

function UserCourseList({ userDetail, keySearch, userId, token }) {
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));
  const dispatch = useDispatch();
  const searchCourse = userDetail.reduce((arr, item) => {
    if (item.tenKhoaHoc.toLowerCase().indexOf(keySearch) > -1) {
      arr.push(item);
    }
    return arr;
  }, []);
  const [reload, setReload] = useState(0);
  const handleCancelRegisterCourse = (courseId) => {
    dispatch(
      postCancelRegisterCourse(
        courseId,
        userSignin.taiKhoan,
        userSignin.accessToken
      )
    );
  };

  const renderUserCourseList = () => {
    return searchCourse?.map((item, index) => {
      return (
        <div className="course-list" key={index}>
          <div className="cover row">
            <div className="img h-10 col-12 col-md-3">
              <img src="https://source.unsplash.com/random" alt="img" />
            </div>
            <div className="info col-12 col-md-7">
              <h2>{item.tenKhoaHoc}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum qui, sapiente quidem officia commodi quae! Impedit
                aperiam nobis assumenda, enim consectetur dolores eos at? Qui
                quis ipsam doloremque totam corporis!
              </p>
            </div>
            <div className="btns col-12 col-md-2">
              <button
                onClick={() => {
                  handleCancelRegisterCourse(item.maKhoaHoc);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return renderUserCourseList();
}

export default UserCourseList;
