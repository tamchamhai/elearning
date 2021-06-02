import React from "react";
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useSelector } from "react-redux";
import "./style.scss";

export default function AddToCardBtn() {
  const { courseInCart } = useSelector((state) => state.courses);

  const renderCourseInCart = () => {
    return courseInCart?.map((item, index) => {
      return (
        <div className="item-popover" key={index}>
          <div className="image">
            <img src={item.hinhAnh} alt="image course" />
          </div>
          <div className="text-des">
            <h3 className="text-title">{item.tenKhoaHoc}</h3>
            <p className="intro">{item.moTa}</p>
            <div className="price">$120</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="add-to-cart">
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        className="ml-2 add-cart-icon"
        aria-haspopup="true"
      >
        <AddShoppingCartIcon />
      </IconButton>
      {/* Popover */}
      <div
        className={`popover-add-card ${
          courseInCart.length === 0 ? " d-none" : ""
        }`}
      >
        <div className="cover-popover">
          <div className="content-popover">{renderCourseInCart()}</div>
          <div className="total-price">
            <p>Total: ${courseInCart.length * 120}</p>
          </div>
        </div>
      </div>
      {/* Number of course */}
      <div
        className={`number-course  ${
          courseInCart.length === 0 ? " d-none" : ""
        }`}
      >
        <p>{courseInCart ? `${courseInCart.length}` : ""}</p>
      </div>
    </div>
  );
}
