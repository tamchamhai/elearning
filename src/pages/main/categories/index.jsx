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
  let categoryName;
  coursesOfCategory
    ? (categoryName = coursesOfCategory[0].danhMucKhoaHoc.tenDanhMucKhoaHoc)
    : (categoryName = "Không tìm thấy khóa học");
  useEffect(function () {
    dispatch(getCategories());
  }, []);
  useEffect(
    function () {
      dispatch(getCoursesOfCategory(name));
    },
    [name]
  );

  return (
    <div className="pon ">
      <h1 className="title" id="title">
        {categoryName}
      </h1>
      <Card renderList={coursesOfCategory} loading={loading} />;
    </div>
  );
}

export default Category;
