import React from "react";
import "./style.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AddItemToCard from "../../../utils/button/addItemToCard";
import Registor from "../../../utils/button/registor";
import SpinnerLoading from "../../spinner-loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Card({ renderList, loading }) {
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));
  const renderBtns = () => {
    if (userSignin) {
      return (
        <div className="btns d-flex justify-content-between container mb-2">
          <AddItemToCard />
          <div className="btn-wishlist">
            <IconButton color="primary" className="hov">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
      );
    } else {
      return (
        <div className="btns d-flex justify-content-center container">
          <Registor />
        </div>
      );
    }
  };

  const renderListCard = () => {
    if (loading) {
      return (
        <div className="backdrop-loading col-12">
          <SpinnerLoading />
        </div>
      );
    } else {
      if (renderList) {
        return renderList.map((course, index) => {
          return (
            <div
              key={index}
              // className="cover-main-card text-decoration-none text-dark px-sm-1 col-12 col-sm-6 col-md-4 col-lg-3"
              className="cover-main-card text-decoration-none"
            >
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
                    <button
                      className={`${
                        course.luotXem >= 100 ? "" : "opacity-none"
                      }`}
                    >
                      BestSeller
                    </button>
                  </div>
                </div>

                {/* Overlay */}
                <div className="overlay">
                  <NavLink
                    to={`/course-detail/${course.maKhoaHoc}`}
                    exact={true}
                  >
                    <div className="navlink">
                      <div className="title-overlay">
                        <h2>{course.tenKhoaHoc}</h2>
                      </div>
                      <div className="update">
                        <button
                          className={`${course.luotXem > 100 ? "" : "d-none"}`}
                        >
                          BestSeller
                        </button>
                        <span>
                          Updateed <span>April 2021</span>
                        </span>
                      </div>
                      <div className="detail">
                        <span>
                          40 Hours Learning<span>All levels</span>
                        </span>
                      </div>
                      <div className="intro">
                        <p>{course.moTa}</p>
                      </div>
                    </div>
                  </NavLink>
                  {renderBtns()}
                </div>

                {/* btns */}
              </div>
            </div>
          );
        });
      }
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 458,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {renderListCard()}
        {/* <div className="row" id="card-container"></div> */}
      </Slider>
    </div>
  );
}

export default Card;
