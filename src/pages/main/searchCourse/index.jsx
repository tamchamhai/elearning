import React, { useEffect } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../components/main/card";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FilterListIcon from "@material-ui/icons/FilterList";
import { NavLink } from "react-router-dom";
import {
  getCategories,
  getCoursesOfCategory,
} from "../../../store/actions/courses.action";

function SearchCoursePage() {
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courses);
  const { searchKey } = useSelector((state) => state.courses);
  const { coursesOfCategory } = useSelector((state) => state.courses);
  const { error } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.loading);

  // Handle render
  const renderTitle = () => {
    if (error.length === 0) {
      return ` ${courseList.length} results for "${searchKey}"`;
    }
  };
  const renderForMoreCourse = () => {
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

  // UseEffect
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCoursesOfCategory("FullStack"));
  }, []);

  return (
    <div className="search-page">
      <div className="course-section">
        <h1 className="search-title">{renderTitle()}</h1>
        <Card renderList={courseList} loading={loading} />
        <h1 className="for-more-title">For more course</h1>
        <div className="btns">
          <div className="filter">
            <span>
              <FilterListIcon /> <span>Filter</span>
            </span>
          </div>
          <div className="popular">
            <select name="popular" id="popular" className="popular-selector">
              <option value="Sort" disabled>
                Sort
              </option>
              <option value="Most Popular">Most Popular</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
        {renderForMoreCourse()}
      </div>
    </div>
  );
}

export default SearchCoursePage;
