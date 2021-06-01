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
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
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
import intructor from "../../../assets/img/mainPage/intructor.jpg";
import business from "../../../assets/img/mainPage/business.jpg";
import video from "../../../assets/img/mainPage/video.jpg";
import adidaslogo from "../../../assets/img/mainPage/adidas-logo.svg";
import bookinglogo from "../../../assets/img/mainPage/booking-logo.svg";
import eventbritelogo from "../../../assets/img/mainPage/eventbrite-logo.svg";
import mercedeslogo from "../../../assets/img/mainPage/mercedes-logo-v2.svg";
import volkswagenlogo from "../../../assets/img/mainPage/volkswagen-logo.svg";
import VideoModal from "../../../components/main/video-modal";

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
      <div className="top-categories">
        <h1>Top categories</h1>
        <div className="categories-items">
          <div className="categories-item">
            <img src={category1} alt="top categories img" />
            <h1>Design</h1>
          </div>
          <div className="categories-item">
            <img src={category2} alt="top categories img" />
            <h1>Development</h1>
          </div>
          <div className="categories-item">
            <img src={category3} alt="top categories img" />
            <h1>Marketing</h1>
          </div>
          <div className="categories-item">
            <img src={category4} alt="top categories img" />
            <h1>IT and Software</h1>
          </div>
          <div className="categories-item">
            <img src={category5} alt="top categories img" />
            <h1>Personal Development</h1>
          </div>
          <div className="categories-item">
            <img src={category6} alt="top categories img" />
            <h1>Business</h1>
          </div>
          <div className="categories-item">
            <img src={category7} alt="top categories img" />
            <h1>Photography</h1>
          </div>
          <div className="categories-item">
            <img src={category8} alt="top categories img" />
            <h1>Music</h1>
          </div>
        </div>
      </div>
      <div className="features-topic">
        <h1>Featured topic by category</h1>
        <div className="feature-cover">
          <div className="feature-item">
            <h2>Development</h2>
            <h4>Python</h4>
            <p>27,343,256 students</p>
            <h4>Web Development</h4>
            <p>9,118,892 students</p>
            <h4>Machine Learning</h4>
            <p>9,390,132 students</p>
          </div>
          <div className="feature-item">
            <h2>Business</h2>
            <h4>Financial Analysis</h4>
            <p>4,023,747 students</p>
            <h4>SQL</h4>
            <p>4,219,867 students</p>
            <h4>PMP</h4>
            <p>1,350,127 students</p>
          </div>
          <div className="feature-item">
            <h2>IT and Software</h2>
            <h4>AWS Certification</h4>
            <p>2,707,267 students</p>
            <h4>Ethical Hacking</h4>
            <p>2,115,225 students</p>
            <h4>Cyber Security</h4>
            <p>9,390,132 students</p>
          </div>
          <div className="feature-item">
            <h2>Design</h2>
            <h4>Photoshop</h4>
            <p>8,556,632 students</p>
            <h4>Graphic Design</h4>
            <p>7,343,256 students</p>
            <h4>Drawing</h4>
            <p>3,075,690 students</p>
          </div>
        </div>
        <span className="btn-explore">Explore More</span>
      </div>
      <div className="become-instructor">
        <div className="non-student">
          <div className="content-wrapper">
            <img src={intructor} alt="intructor img" />
            <div className="text">
              <h3>Become an instructor</h3>
              <p>
                Top instructors from around the world teach millions of students
                on Udemy. We provide the tools and skills to teach what you
                love.
              </p>
              <span className="btn-explore">Start teaching today</span>
            </div>
          </div>
        </div>
      </div>
      <div className="company-trust">
        <div className="text-wrap">
          <h3>Trusted by companies off all size</h3>
          <div className="img-wrap">
            <div className="img-item">
              <img src={bookinglogo} alt="trust logo" />
            </div>
            <div className="img-item">
              <img src={volkswagenlogo} alt="trust logo" />
            </div>
            <div className="img-item">
              <img src={mercedeslogo} alt="trust logo" />
            </div>
            <div className="img-item">
              <img src={adidaslogo} alt="trust logo" />
            </div>
            <div className="img-item">
              <img src={eventbritelogo} alt="trust logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="become-instructor">
        <div className="non-student business-bg">
          <div className="content-wrapper">
            <div className="text text-white">
              <h3>Elearn for Business</h3>
              <p>
                Get unlimited access to 5,500+ of Udemy’s top courses for your
                team.
              </p>
              <span className="btn-explore">Get Elearn for Business</span>
            </div>
            <img src={business} alt="business img" />
          </div>
        </div>
      </div>
      <div className="video">
        <div className="video-wrap">
          <div className="img">
            <img src={video} alt="video img" />
            <div
              className="play-btn"
              data-toggle="modal"
              data-target="#videoModal"
            >
              <VideoModal />
              <PlayCircleOutlineIcon />
            </div>
          </div>
          <div className="text">
            <h3>Transform your life through education</h3>
            <p>
              Mohamad Alaloush launched a new career in software development by
              taking courses on Udemy. What will you be able to do?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
