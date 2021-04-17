import Slider from "react-slick";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCourses } from "../../../store/actions/courses.action";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button, IconButton } from "@material-ui/core";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const styleBtn = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  paddingLeft: 30,
  paddingRight: 30,
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

function Card() {
  const dispatch = useDispatch();
  // tuong tu nhu mapStateToProps phai state.courses moi boc tach duoc list
  const { courseList } = useSelector((state) => state.courses);

  const renderListCard = () => {
    return courseList.map((course, index) => {
      return (
        <div key={index} className="cover">
          <div className="cards">
            <div className="head-img">
              <img src={course.hinhAnh} alt="img course" />
            </div>
            <div className="title">
              <h2>{course.tenKhoaHoc}</h2>
            </div>
            <div className="author">
              <p>{course.nguoiTao.hoTen}</p>
            </div>
            <div className="votes">
              <span className="score">4.5</span>
              <span className="stars">
                <StarIcon viewBox="0 0 30 30" />
                <StarIcon viewBox="0 0 30 30" />
                <StarIcon viewBox="0 0 30 30" />
                <StarHalfIcon viewBox="0 0 30 30" />
                <StarBorderIcon viewBox="0 0 30 30" />
              </span>
              <span className="views">({course.luotXem})</span>
            </div>
            <div className="price">
              <p>$120</p>
              <div className="tag-best-seller">
                <button>BestSeller</button>
              </div>
            </div>

            {/* Overlay */}
            <div className="overlay">
              <div className="title-overlay">
                <h2>{course.tenKhoaHoc}</h2>
              </div>
              <div className="update">
                <button>BestSeller</button>
                <span>
                  Đã Cập Nhật <span>April 2021</span>
                </span>
              </div>
              <div className="detail">
                <span>
                  40 Giờ học<span>Tất cả cấp độ</span>
                </span>
              </div>
              <div className="intro">
                <p>{course.moTa}</p>
              </div>
              <div className="btns d-flex justify-content-between container">
                <div className="btn-add-to-card d-flex align-items-center">
                  <Button style={styleBtn}>Thêm vào giỏ</Button>
                </div>
                <div className="btn-wishlist">
                  <IconButton color="primary" className="hov">
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(function () {
    axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res) => {
        dispatch(getListCourses(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div>
      <h2> FullStack </h2>
      <Slider {...settings}>{renderListCard()}</Slider>
    </div>
  );
}

export default Card;
