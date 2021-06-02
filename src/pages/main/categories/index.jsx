import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCoursesOfCategory,
} from "../../../store/actions/courses.action";
import Card from "../../../components/main/card";
import "./style.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FilterListIcon from "@material-ui/icons/FilterList";
import SpinnerLoading from "../../../components/spinner-loading";
import Slider from "react-slick";
import avatar1 from "../../../assets/img/mainPage/avatar1.jpg";
import avatar2 from "../../../assets/img/mainPage/avatar2.jpg";
import avatar3 from "../../../assets/img/mainPage/avatar3.jpg";
import avatar4 from "../../../assets/img/mainPage/avatar4.jpg";
import featuredcourse from "../../../assets/img/carousel/featuredcourse.jpg";

function Category() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { loading } = useSelector((state) => state.loading);
  const { coursesOfCategory } = useSelector((state) => state.courses);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const instructor = [
    {
      avatar: avatar1,
      name: "Dr. Angela Yu",
      profession: "Data science, Flask",
      rating: "4.7",
      students: "860.323",
      courses: "15",
    },
    {
      avatar: avatar2,
      name: "Joso Portilla",
      profession: "Python, Machine learning",
      rating: "4.5",
      students: "660.323",
      courses: "11",
    },
    {
      avatar: avatar3,
      name: "Academind by Schwarzmüller",
      profession: "React, React Hooks",
      rating: "4.8",
      students: "1.860.323",
      courses: "35",
    },
    {
      avatar: avatar4,
      name: "Coot Steele",
      profession: "Web Development, MySQL",
      rating: "4.9",
      students: "1.060.323",
      courses: "25",
    },
  ];

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(getCoursesOfCategory(name));
  }, [name]);

  const renderCategoryName = () => {
    if (coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "BackEnd") {
      return "BackEnd Development";
    } else if (
      coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "FrontEnd"
    ) {
      return "FrontEnd Development";
    } else if (
      coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "FullStack"
    ) {
      return "FullStack Development";
    } else if (
      coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "DiDong"
    ) {
      return "Mobile Development";
    } else if (
      coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "TuDuy"
    ) {
      return "Algorithm";
    } else if (
      coursesOfCategory[0]?.danhMucKhoaHoc.maDanhMucKhoahoc == "Design"
    ) {
      return "Web Design";
    }
  };
  const renderFeaturedCourse = () => {
    return coursesOfCategory?.map((item, index) => {
      return (
        <div className="course-item" key={index}>
          <img src={item.hinhAnh} alt="img course" />
          <div className="text-course">
            <div className="up">
              <h3 className="title-course">{item.tenKhoaHoc}</h3>
              <p className="intro-course">{item.moTa}</p>
              <p className="tutor-course">
                Created by: Maximilian Schwarzmüller and 1 other
              </p>
              <p className="update-course">
                <span>Updated</span>
                <span>May 2021</span>
                <span>28 total hours - 244 lectures - All level</span>
              </p>
              <div className="votes">
                <span>4.9</span>
                <span className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>
                <span className="views">({item.luotXem})</span>
                <span className="bestseller">Bestseller</span>
              </div>
            </div>
            <div className="down">
              <p className="price">$94.99</p>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderInstructor = () => {
    return instructor.map((item, index) => {
      return (
        <div className="grids-item">
          <div className="image">
            <img src={item.avatar} alt="instructor avatar" />
          </div>
          <div className="text">
            <div className="name">{item.name}</div>
            <div className="profession">{item.profession}</div>
            <div className="rates">
              <span>{item.rating}</span>
              <span>
                <StarIcon />
              </span>
              <span>Instructor Rating</span>
            </div>
            <div className="students">
              <span>{item.students}</span>
              <span>students</span>
            </div>
            <div className="courses">
              <span>{item.courses}</span>
              <span>courses</span>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderAllDevelopmentCourse = () => {
    return coursesOfCategory?.map((item, index) => {
      return (
        <NavLink
          className="list-item"
          to={`/course-detail/${item.maKhoaHoc}`}
          exact={true}
          key={index}
        >
          <img src={item.hinhAnh} alt="img course" />
          <div className="text-course">
            <div className="up">
              <h3 className="title-course">{item.tenKhoaHoc}</h3>
              <p className="intro-course"> {item.moTa}</p>
              <p className="tutor-course">Created by: {item.nguoiTao?.hoTen}</p>
              <p className="update-course">
                <span>Updated</span>
                <span>May 2021</span>
                <span>28 total hours - 244 lectures - All level</span>
              </p>
              <div className="votes">
                <span>4.9</span>
                <span className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>
                <span className="views">(202)</span>
                <span className="bestseller">Bestseller</span>
              </div>
            </div>
            <div className="down">
              <p className="price">$94.99</p>
            </div>
          </div>
        </NavLink>
      );
    });
  };

  const renderCategory = () => {
    if (loading) {
      return (
        <div className="spinner-loading">
          <SpinnerLoading />
        </div>
      );
    } else {
      return (
        <div className="pon">
          <h1 className="title" id="title">
            {renderCategoryName()}
          </h1>
          <h3 className="subtitle">Courses to get you started</h3>
          <Card renderList={coursesOfCategory} loading={loading} />;
          {/* Featured courses */}
          <div className="featured-course">
            <h3>Featured Courses</h3>
            <div className="course-wrap">
              <Slider {...settings}>{renderFeaturedCourse()}</Slider>
            </div>
          </div>
          <div className="popular-topics">
            <h3>Popular Topics</h3>
            <div className="grids">
              <div className="grids-item">
                <span>Python</span>
              </div>
              <div className="grids-item">
                <span>Data Science</span>
              </div>
              <div className="grids-item">
                <span>Web Development</span>
              </div>
              <div className="grids-item">
                <span>Java</span>
              </div>
              <div className="grids-item">
                <span>CSS</span>
              </div>
              <div className="grids-item">
                <span>C#</span>
              </div>
              <div className="grids-item">
                <span>Unity</span>
              </div>
              <div className="grids-item">
                <span>Machine Learning</span>
              </div>
              <div className="grids-item">
                <span>React</span>
              </div>
              <div className="grids-item">
                <span>Javascript</span>
              </div>
            </div>
          </div>
          <div className="popular-instructor">
            <h3>Popular instructor</h3>
            <div className="grids">{renderInstructor()}</div>
          </div>
          <div className="all-development-course">
            <h3>All Development Courses</h3>
            <div className="btns">
              <div className="filter">
                <span>
                  <FilterListIcon /> <span>Filter</span>
                </span>
              </div>
              <div className="popular">
                <select
                  name="popular"
                  id="popular"
                  className="popular-selector"
                >
                  <option value="Sort" disabled>
                    Sort
                  </option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Highest Rated">Highest Rated</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>
            </div>
            <div className="list-course">
              <div className="sidebar-filter"></div>
              {/* Render list course */}
              <div className="list-wrap">{renderAllDevelopmentCourse()}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return renderCategory();
}

export default Category;
