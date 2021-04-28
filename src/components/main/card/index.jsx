import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AddItemToCard from "../../../utils/button/addItemToCard";

const styleBtn = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  paddingLeft: 30,
  paddingRight: 30,
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

function Card({ renderList, loading }) {
  const history = useHistory();
  const renderListCard = () => {
    if (loading) {
      return (
        <div className="backdrop-loading col-12">
          <div className="spinner-border text-secondary " role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    } else {
      if (renderList) {
        return renderList.map((course, index) => {
          return (
            <div
              key={index}
              className="cover text-decoration-none text-dark px-sm-1 col-12 col-sm-6 col-md-4 col-lg-3"
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
                    <button>BestSeller</button>
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
                    </div>
                  </NavLink>

                  <div className="btns d-flex justify-content-between container">
                    <AddItemToCard />
                    <div className="btn-wishlist">
                      <IconButton color="primary" className="hov">
                        <FavoriteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>

                {/* btns */}
              </div>
            </div>
          );
        });
      }
    }
  };

  return (
    <div className="row" id="card-container">
      {renderListCard()}
    </div>
  );
}

export default Card;
