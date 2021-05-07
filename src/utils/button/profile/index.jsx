import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { postUserSigninSuccess } from "../../../store/actions/user.action";

export default function ProfileBtn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("userSignin");
    dispatch(postUserSigninSuccess(null));
    history.push("/");
  };
  return (
    <div className="cover">
      <NavLink to="/user" exact={true} className=" user-avatar-icon">
        <div className="avatar-center avatar-flash ">
          <img
            src="https://source.unsplash.com/random"
            alt="img"
            className="image-cover avatar-image"
          />
        </div>
      </NavLink>

      <div className="hover-popup">
        <div className="transparent"></div>
        <div className="cover-hover">
          <div className="header row">
            <div className="avatar col-3">
              <div className="avatar-center avatar-flash ">
                <img
                  src="https://source.unsplash.com/random"
                  alt="img"
                  className="image-cover avatar-image"
                />
              </div>
            </div>
            <div className="name col-9">
              <div className="name-container">
                <h1>ngo phi long</h1>
                <p className="email">ngophilongspkt@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="profile">
            <ul>
              <li className="item">
                <NavLink to="/user" exact={true}>
                  Profile
                </NavLink>
              </li>
              <li className="item" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
