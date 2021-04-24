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

  const isLogin = true;
  const renderBtn = () => {
    if (isLogin) {
      return (
        <div className="registor">
          <AddItemToCard />
          <BuyNowBtn />
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
    console.log(loading);
    if (loading) {
      return (
        <div className="backdrop-loading col-12">
          <div className="spinner-border text-secondary " role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    } else {
      console.log(courseDetail);
      return (
        <div className="course-detail">
          <div className="banner row">
            <div className="content col-8">
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
              <span className="rating">({courseDetail.luotXem} bình chọn)</span>
              <span className="student">
                {" "}
                {courseDetail.soLuongHocVien} Học viên
              </span>
              <div className="author">
                <p>
                  được tạo bởi <NavLink to="/">Vinh vật vờ</NavLink>,
                  <NavLink to="/">Vinh vất vưỡng</NavLink>
                </p>
              </div>
              <div className="update">
                <span>
                  {" "}
                  <UpdateIcon /> Cập nhật lần cuối 3/21
                </span>
                <span>
                  {" "}
                  <LanguageIcon /> Tiếng việt
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
            <div className="photo col-4">
              <img src={courseDetail.hinhAnh} alt="photo of course" />
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
