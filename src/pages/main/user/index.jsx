import React, { useState } from "react";
import "./style.scss";

export default function UserProfile() {
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));

  const [keyChange, setKey] = useState({ keyword: "profile" });
  const [userUpdata, setUserUpdata] = useState(userSignin);
  const handleChangeProfile = (key) => {
    console.log(userUpdata);
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
              <form autoComplete="off" className="form-profile">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    name="name"
                    placeholder={userSignin.hoTen}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="form-input"
                    name="userName"
                    placeholder={userSignin.taiKhoan}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-input"
                    name="phone"
                    placeholder={userSignin.soDT}
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
                    placeholder={userSignin.email}
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
              <form autoComplete="off" className="form-profile">
                <div className="form-group">
                  <label htmlFor="oldpassword" className="form-label">
                    Your last password
                  </label>
                  <input
                    type="oldpassword"
                    id="oldpassword"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                    className="form-input"
                    placeholder="************"
                    name="oldpassword"
                  />
                  <div className="form-error">{}</div>
                </div>

                <div className="form-group">
                  <label htmlFor="newpassword" className="form-label">
                    Your new password
                  </label>
                  <input
                    type="newpassword"
                    id="newpassword"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                    className="form-input"
                    placeholder="************"
                    name="newpassword"
                  />
                  <div className="form-error">{}</div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirm new password
                  </label>
                  <input
                    type="confirmpassword"
                    id="confirmpassword"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                    className="form-input"
                    placeholder="************"
                    name="confirmpassword"
                  />
                  <div className="form-error">{}</div>
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
      case "courses":
        return (
          <div className="courses">
            <div>courses</div>
          </div>
        );
      default:
        return (
          <>
            <div className="header">
              <h1>Public profile</h1>
              <p>Updata information about yourself</p>
            </div>
            <div className="information">
              <form autoComplete="off" className="form-profile">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="form-input"
                    name="userName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-input"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="repassword" className="form-label">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    className="form-input"
                    name="repassword"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-input"
                    name="phone"
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
                  />
                </div>
                <div className="cover-btn">
                  <button type="submit" className="btn--gradient">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </>
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
