import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SpinnerLoading from "../../spinner-loading";

export default function Categories() {
  const { categories } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.loading);

  const renderCategory = () => {
    if (loading) {
      return <SpinnerLoading />;
    } else {
      return categories?.map((item, index) => {
        if (item.maDanhMuc == "BackEnd") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              BackEnd Development
            </NavLink>
          );
        } else if (item.maDanhMuc == "Design") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              Web Design
            </NavLink>
          );
        } else if (item.maDanhMuc == "DiDong") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              Mobile Development
            </NavLink>
          );
        } else if (item.maDanhMuc == "FrontEnd") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              FrontEnd Web Design
            </NavLink>
          );
        } else if (item.maDanhMuc == "FullStack") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              FullStack Web Development
            </NavLink>
          );
        } else if (item.maDanhMuc == "TuDuy") {
          return (
            <NavLink
              key={index}
              exact={false}
              className="dropdown-item"
              to={`/category/${item.maDanhMuc}`}
            >
              Algorithm Basic
            </NavLink>
          );
        }
      });
    }
  };
  return <div>{renderCategory()}</div>;
}
