import React from "react";
import "./_style.scss";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Sidebar from "../sidebar";
import Categories from "../categories";
import AddToCartBtn from "../../../utils/button/addToCart";
import NotificationsBtn from "../../../utils/button/notifications";
import WishListBtn from "../../../utils/button/wishList";
import ProfileBtn from "../../../utils/button/profile";
import Registor from "../../../utils/button/registor";

const loginSwitch = false;
const renderUserLogin = () => {
  if (loginSwitch) {
    return (
      //  {/* UI before log in */}
      <div className="beforeLogin d-flex">
        <AddToCartBtn />
        <Registor />
      </div>
    );
  } else {
    return (
      // {/* UI after log in */}
      <div className="afterLogin d-flex">
        <WishListBtn />
        <AddToCartBtn />
        <NotificationsBtn />
        {/* user profile */}
        <ProfileBtn />
      </div>
    );
  }
};

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className="navbar-brand" to="/">
        <span className="logo-part-one">E</span>
        <span className="logo-part-two">Learn</span>
      </NavLink>

      <div
        className="collapse navbar-collapse d-sm-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto d-sm-none d-lg-block">
          {/* List course drapdown */}
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Danh mục khóa học
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* Categories courses here */}
              <Categories />
            </div>
          </li>
        </ul>
        {/* Input search */}
        <form className="form-inline my-2 my-lg-0 d-sm-none d-lg-block">
          <button>
            <SearchOutlinedIcon />
          </button>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tìm khóa học"
            aria-label="Search"
          />
        </form>
        {/* User Log in and log out  */}
        <div className="user">{renderUserLogin()}</div>
      </div>

      {/* Sidebar toggle buttun */}
      <div className="sidebar-btn ml-2 d-lg-none">
        <Sidebar loginSwitch={loginSwitch} />
      </div>
    </nav>
  );
}
