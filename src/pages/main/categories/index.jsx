import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCoursesOfCategory,
} from "../../../store/actions/courses.action";
import Card from "../../../components/main/card";
import "./style.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import SpinnerLoading from "../../../components/spinner-loading";
import Slider from "react-slick";

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
        </div>
      );
    }
  };

  return renderCategory();
}

export default Category;
