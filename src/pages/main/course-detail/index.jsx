import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Registor from "../../../utils/button/registor";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";
import "./style.scss";
import UpdateIcon from "@material-ui/icons/Update";
import LanguageIcon from "@material-ui/icons/Language";
import AddItemToCard from "../../../utils/button/addItemToCard";
import BuyNowBtn from "../../../utils/button/buyNow";
import { getCourseDetail } from "../../../store/actions/courses.action";

export default function CourseDetail() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { courseDetail } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.loading);
  const { userSignin } = useSelector((state) => state.user);

  const renderBtn = () => {
    if (userSignin) {
      return (
        <div className="registor">
          <AddItemToCard />
          <BuyNowBtn
            courseID={courseId}
            userName={userSignin.taiKhoan}
            token={userSignin.accessToken}
          />
        </div>
      );
    } else {
      return (
        <div className="registor">
          <Registor />
        </div>
      );
    }
  };

  useEffect(function () {
    dispatch(getCourseDetail(courseId));
  }, []);

  const renderCourseDetail = () => {
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
        <div className="course-detail">
          <div className="banner row">
            <div className="content col-12 col-lg-8">
              <NavLink to="/category" exact={true} className="nav-link">
                {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
              </NavLink>
              <h1>{courseDetail.tenKhoaHoc}</h1>
              <p>{courseDetail.moTa}</p>
              <span className="points">4.5</span>
              <span className="stars">
                <StarIcon viewBox="0 0 30 30" />
                <StarIcon viewBox="0 0 30 30" />
                <StarIcon viewBox="0 0 30 30" />
                <StarHalfIcon viewBox="0 0 30 30" />
                <StarBorderIcon viewBox="0 0 30 30" />
              </span>
              <span className="rating">({courseDetail.luotXem} votes)</span>
              <span className="student">
                {" "}
                {courseDetail.soLuongHocVien} Students
              </span>
              <div className="author">
                <p>
                  Created by <NavLink to="/">Russo</NavLink>,
                  <NavLink to="/">Tony Stark</NavLink>
                </p>
              </div>
              <div className="update">
                <span>
                  {" "}
                  <UpdateIcon />
                  Lastest Update 3/21
                </span>
                <span>
                  {" "}
                  <LanguageIcon /> Vietnamese
                </span>
              </div>
              <div className="btns d-flex justify-content-start">
                {renderBtn()}
                <div className="btn-wishList">
                  <IconButton color="primary" className="hov">
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="photo col-12 col-lg-4 row  pl-md-1">
              <img
                src={courseDetail.hinhAnh}
                className="col-12"
                alt="photo of course"
              />
            </div>
          </div>

          {/* detail course */}
          <div className="container detail"></div>
        </div>
      );
    }
  };

  return <div>{renderCourseDetail()}</div>;
}
