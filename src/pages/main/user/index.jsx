import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserUpdate } from "../../../store/actions/user.action";
import "./style.scss";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));
  const token = userSignin.accessToken;
  const [keyChange, setKey] = useState({ keyword: "profile" });
  const [userProfile, setUserUpdate] = useState({
    user: {
      taiKhoan: userSignin.taiKhoan,
      hoTen: userSignin.hoTen,
      soDT: userSignin.soDT,
      maNhom: userSignin.maNhom,
      email: userSignin.email,
      newpassword: "",
      confirmpassword: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      email: "",
      newpassword: "",
      confirmpassword: "",
    },
  });

  const handleUserProfile = (event) => {
    const { name, value } = event.target;
    let errorMess = "";

    if (name === "confirmpassword") {
      if (value !== userProfile.user.newpassword) {
        errorMess = "Confirm password is not correct!";
      }
    }

    const user = { ...userProfile.user, [name]: value };
    const error = { ...userProfile.error, [name]: errorMess };
    setUserUpdate({
      user: user,
      errors: error,
    });
  };

  const handleSubmitChangeProfile = (event) => {
    event.preventDefault();
    dispatch(
      postUserUpdate(
        userProfile.user.taiKhoan,
        userProfile.user.hoTen,
        userProfile.user.soDT,
        userProfile.user.email,
        userProfile.user.maNhom,
        userProfile.user.newpassword,
        token
      )
    );
  };

  const handleChangeProfile = (key) => {
    setKey({ ...keyChange, keyword: key });
  };
  const renderProfile = () => {
    switch (keyChange.keyword) {
      case "profile":
        return (
          <div className="profile">
            <div className="header">
              <h1>Public profile</h1>
              <p>Updata information about yourself</p>
            </div>
            <div className="information">
              <form
                autoComplete="off"
                className="form-profile"
                onSubmit={handleSubmitChangeProfile}
              >
                <div className="form-group">
                  <label htmlFor="taiKhoan" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="taiKhoan"
                    className="form-input"
                    name="taiKhoan"
                    disabled
                    value={userProfile.user.taiKhoan}
                    onChange={handleUserProfile}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="hoTen"
                    className="form-input"
                    name="hoTen"
                    value={userProfile.user.hoTen}
                    onChange={handleUserProfile}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="soDT" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="soDT"
                    className="form-input"
                    name="soDT"
                    value={userProfile.user.soDT}
                    onChange={handleUserProfile}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    name="email"
                    value={userProfile.user.email}
                    onChange={handleUserProfile}
                  />
                </div>
                <div className="cover-btn">
                  <button type="submit" className="btn--gradient">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      case "account":
        return (
          <div className="account">
            <div className="header">
              <h1>Private profile</h1>
              <p>Change your password</p>
            </div>
            <div className="information">
              <form
                autoComplete="off"
                className="form-profile"
                onSubmit={handleSubmitChangeProfile}
              >
                <div className="form-group">
                  <label htmlFor="newpassword" className="form-label">
                    Your new password
                  </label>
                  <input
                    type="newpassword"
                    id="newpassword"
                    // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                    className="form-input"
                    name="newpassword"
                    // value={userProfile.user.newpassword}
                    onChange={handleUserProfile}
                  />
                  <div className="form-error">
                    {userProfile.errors.newpassword}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirm new password
                  </label>
                  <input
                    type="confirmpassword"
                    id="confirmpassword"
                    // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                    className="form-input"
                    name="confirmpassword"
                    // value={userProfile.user.confirmpassword}
                    onChange={handleUserProfile}
                  />
                  <div className="form-error">
                    {userProfile.errors.confirmpassword}
                  </div>
                </div>
                <div className="cover-btn">
                  {userProfile.newpassword === userProfile.confirmpassword ? (
                    <button type="submit" className="btn--gradient">
                      Save
                    </button>
                  ) : (
                    <button type="submit" className="btn--gradient" disabled>
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        );
      case "courses":
        return (
          <div className="courses">
            <div>courses</div>
          </div>
        );
      default:
        return (
          <div className="profile">
            <div className="header">
              <h1>Public profile</h1>
              <p>Updata information about yourself</p>
            </div>
            <div className="information">
              <form
                onSubmit={handleSubmitChangeProfile}
                autoComplete="off"
                className="form-profile"
              >
                <div className="form-group">
                  <label htmlFor="taiKhoan" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="taiKhoan"
                    className="form-input"
                    name="taiKhoan"
                    disabled
                    value={userProfile.taiKhoan}
                    onChange={handleUserProfile}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hoTen" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="hoTen"
                    className="form-input"
                    name="hoTen"
                    value={userProfile.hoTen}
                    onChange={handleUserProfile}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="soDT" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="soDT"
                    className="form-input"
                    name="soDT"
                    value={userProfile.soDT}
                    onChange={handleUserProfile}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    name="email"
                    value={userProfile.email}
                    onChange={handleUserProfile}
                  />
                </div>
                <div className="cover-btn">
                  <button type="submit" className="btn--gradient">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 grid-user-avatar">
            <div className="user-avatar">
              <div className="avatar">
                <div className="avatar-center avatar-flash">
                  <img
                    src="https://source.unsplash.com/random"
                    alt="img"
                    className="image-cover avatar-image"
                  />
                </div>
              </div>
              <div className="name">{userSignin.hoTen}</div>
            </div>
            <div className="list">
              <ul>
                <li
                  className="item "
                  onClick={() => {
                    handleChangeProfile("profile");
                  }}
                >
                  <a href="#">Profile</a>
                </li>
                <li
                  className="item"
                  onClick={() => {
                    handleChangeProfile("account");
                  }}
                >
                  <a href="#">Account</a>
                </li>
                <li
                  className="item"
                  onClick={() => {
                    handleChangeProfile("courses");
                  }}
                >
                  <a href="#">My courses</a>
                </li>
              </ul>
            </div>
          </div>

          {/* ****************************************** */}
          <div className="col-12 col-md-9 grid-user-info">
            {renderProfile()}
          </div>
        </div>
      </div>
    </div>
  );
}
