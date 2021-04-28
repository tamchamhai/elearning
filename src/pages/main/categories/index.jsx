import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCoursesOfCategory,
} from "../../../store/actions/courses.action";
import Card from "../../../components/main/card";
import "./style.scss";

function Category() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { loading } = useSelector((state) => state.loading);
  const { coursesOfCategory } = useSelector((state) => state.courses);

  useEffect(function () {
    dispatch(getCategories());
  }, []);
  useEffect(
    function () {
      dispatch(getCoursesOfCategory(name));
    },
    [name]
  );

  const renderCategory = () => {
    if (loading) {
      return (
        <div className="backdrop-loading col-12">
          <div className="spinner-border text-secondary " role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pon ">
          <h1 className="title" id="title">
            {coursesOfCategory[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </h1>
          <Card renderList={coursesOfCategory} loading={loading} />;
        </div>
      );
    }
  };

  return renderCategory();
}

export default Category;