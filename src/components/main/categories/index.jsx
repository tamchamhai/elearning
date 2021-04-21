import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const { categories } = useSelector((state) => state.courses);
  // const { loading } = useSelector((state) => state.loading);

  const renderCategory = () => {
    return categories.map((item, index) => {
      return (
        <NavLink
          key={index}
          exact={false}
          className="dropdown-item"
          to={`/category/${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </NavLink>
      );
    });
  };
  return <div>{renderCategory()}</div>;
}
