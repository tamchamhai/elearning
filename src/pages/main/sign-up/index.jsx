import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.scss";
import { postUserSignUp } from "../../../store/actions/user.action";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userSignup, setUserSignup] = useState({
    userName: "",
    password: "",
    name: "",
    phone: "",
    maNhom: "GP01",
    email: "",
  });
  // const manhom = "GP01";

  const [isValid, setErrorSignup] = useState({
    name: "",
    userName: "",
    password: "",
    repassword: "",
    phone: "",
    email: "",
  });

  // Handle function
  const handleOnchange = (event) => {
    const { name, value } = event.target;

    // Validation function
    let errorSMS = "";
    if (value.trim() === "") {
      errorSMS = name + " is empty";
    }

    setUserSignup({ ...userSignup, [name]: value });
    setErrorSignup({ ...isValid, [name]: errorSMS });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postUserSignUp(
        userSignup.userName,
        userSignup.password,
        userSignup.name,
        userSignup.phone,
        userSignup.maNhom,
        userSignup.email,
        history
      )
    );
  };
  return (
    <div className="d-flex justify-content-center align-items-center signup-cover ">
      <div className="signup row">
        <img
          src="https://imgur.com/aILP3CD.png"
          alt="sign img"
          className="d-none d-md-block col-md-6 signup-image"
        />

        <div className="signup-container col-md-6 col-12">
          <h1 className="signup-heading">Sign up</h1>
          <form
            className="signup-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Ex: John Doe"
                name="name"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.name}</div>
            </div>
            <div className="form-group">
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="form-input"
                placeholder="Ex: John Doe"
                name="userName"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.userName}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="************"
                name="password"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.password}</div>
            </div>
            <div className="form-group">
              <label htmlFor="repassword" className="form-label">
                Repeat password
              </label>
              <input
                type="password"
                id="repassword"
                className="form-input"
                placeholder="************"
                name="repassword"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.repassword}</div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="form-input"
                placeholder="Ex: 0909888777"
                name="phone"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.phone}</div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Ex: johndoe@email.com"
                name="email"
                onChange={handleOnchange}
              />
              <div className="form-error">{isValid.email}</div>
            </div>

            <div className="form-group switch-to-signin">
              Already a member?{" "}
              <NavLink to="/signin" className="signup-term-link">
                Sign In now
              </NavLink>
            </div>
            <button type="submit" className="btn btn--gradient">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
