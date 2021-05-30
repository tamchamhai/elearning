import React, { useEffect, useState } from "react";
import Carousel from "../../../components/main/carousel";
import Card from "../../../components/main/card";
import Feature from "../../../components/feature";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getListCourses,
} from "../../../store/actions/courses.action";
import "./style.scss";
import avatar1 from "../../../assets/img/mainPage/avatar1.jpg";
import avatar2 from "../../../assets/img/mainPage/avatar2.jpg";
import avatar3 from "../../../assets/img/mainPage/avatar3.jpg";
import avatar4 from "../../../assets/img/mainPage/avatar4.jpg";
import avatar5 from "../../../assets/img/mainPage/avatar5.jpg";
import avatar6 from "../../../assets/img/mainPage/avatar6.jpg";
import avatar7 from "../../../assets/img/mainPage/avatar7.jpg";
import category1 from "../../../assets/img/mainPage/category1.jpg";
import category2 from "../../../assets/img/mainPage/category2.jpg";
import category3 from "../../../assets/img/mainPage/category3.jpg";
import category4 from "../../../assets/img/mainPage/category4.jpg";
import category5 from "../../../assets/img/mainPage/category5.jpg";
import category6 from "../../../assets/img/mainPage/category6.jpg";
import category7 from "../../../assets/img/mainPage/category7.jpg";
import category8 from "../../../assets/img/mainPage/category8.jpg";

export default function Home() {
  // Get data from store
  const dispatch = useDispatch();
  // tuong tu nhu mapStateToProps phai state.courses moi boc tach duoc list
  const { courseList } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.loading);

  // useState
  const [isActive, setActive] = useState(1);
  const [item, setItem] = useState({
    imgAvatar: [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7],
    imgCategory: [
      category1,
      category2,
      category3,
      category4,
      category5,
      category6,
      category7,
      category8,
    ],
    nameCategory: [
      "Expand your career opportunities with Python",
      "Analyze and visualize data with Excel",
      "Build websites and applications with Web Development",
      "Grow your software development skills with JavaScript",
      "Lead data-driven decisions with Data Science",
      "Become an expert in cloud computing with AWS Certification",
      "Expand your creative skillset with Drawing",
    ],
  });

  // Function handle
  const handlePickCourseID = (num) => {
    setActive(num);
  };

  // Call Api to pull data to store
  useEffect(function () {
    dispatch(getListCourses());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Carousel />
      <Feature />
      <div className="quote">
        <h1>The world's largest selection of courses</h1>
        <p>
          Choose from 155,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="tab-list">
        <div className="navbar-list">
          <ul>
            <li
              className={`navbar-item`}
              onClick={() => {
                handlePickCourseID(1);
              }}
            >
              <a className={` ${isActive === 1 ? "active-click" : ""}`}>
                Python
              </a>
            </li>
            <li
              className={`navbar-item`}
              onClick={() => {
                handlePickCourseID(2);
              }}
            >
              <a className={` ${isActive === 2 ? "active-click" : ""}`}>
                Excel
              </a>
            </li>
            <li
              className={`navbar-item`}
              onClick={() => {
                handlePickCourseID(3);
              }}
            >
              <a className={` ${isActive === 3 ? "active-click" : ""}`}>
                Web Development
              </a>
            </li>
            <li
              className={`navbar-item `}
              onClick={() => {
                handlePickCourseID(4);
              }}
            >
              <a className={`${isActive === 4 ? "active-click" : ""}`}>
                Javascript
              </a>
            </li>
            <li
              className={`navbar-item `}
              onClick={() => {
                handlePickCourseID(5);
              }}
            >
              <a className={`${isActive === 5 ? "active-click" : ""}`}>
                Data Science{" "}
              </a>
            </li>
            <li
              className={`navbar-item `}
              onClick={() => {
                handlePickCourseID(6);
              }}
            >
              <a className={`${isActive === 6 ? "active-click" : ""}`}>
                {" "}
                AWS Certificate
              </a>
            </li>
            <li
              className={`navbar-item `}
              onClick={() => {
                handlePickCourseID(7);
              }}
            >
              <a className={`${isActive === 7 ? "active-click" : ""}`}>
                {" "}
                Drawing
              </a>
            </li>
          </ul>
        </div>
        <div className="board-navbar">
          <div className="heading-board">
            <div className="text">
              <h1>{item.nameCategory[isActive - 1]}</h1>
              <p>
                Whether you work in machine learning or finance, or are pursuing
                a career in web development or data science, Python is one of
                the most important skills you can learn. Python's simple syntax
                is especially suited for desktop, web, and business
                applications. Python's design philosophy emphasizes readability
                and usability. Python was developed upon the premise that there
                should be only one way (and preferably one obvious way) to do
                things, a philosophy that has resulted in a strict level of code
                standardization. The core programming language is quite small
                and the standard library is also large. In fact, Python's large
                library is one of its greatest benefits, providing a variety of
                different tools for programmers suited for many different tasks
              </p>
              <span>Explore Python</span>
            </div>
            <div className="img">
              <img src={item.imgAvatar[isActive - 1]} alt="img avatar" />
            </div>
          </div>
          <div className="board-list">
            <Card renderList={courseList} loading={loading} />
          </div>
        </div>
      </div>
      <div className="student-viewing">
        <h2 className="heading-student">Student are viewing</h2>
        <Card renderList={courseList} loading={loading} />
      </div>
      <div className="student-viewing">
        <h2 className="heading-student">
          Because you search for <span>"Algorithms"</span>
        </h2>
        <Card renderList={courseList} loading={loading} />
      </div>
    </div>
  );
}
