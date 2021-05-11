import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.scss";
import { postUserSignUp } from "../../../store/actions/user.action";
// import useForm from "react-hook-form";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userSignup, setUserSignup] = useState({
    userInput: {
      userName: "",
      name: "",
      password: "",
      repassword: "",
      phone: "",
      maNhom: "GP02",
      email: "",
    },
    errors: {
      name: "",
      userName: "",
      password: "",
      repassword: "",
      phone: "",
      email: "",
    },
  });

  // Handle function
  const handleOnchange = (event) => {
    const { name, value, type, pattern } = event.target;
    const { password, repassword } = userSignup.userInput;
    console.log(
      userSignup.userInput.userName,
      userSignup.userInput.password,
      userSignup.userInput.name,
      userSignup.userInput.phone,
      userSignup.userInput.maNhom,
      userSignup.userInput.email
    );
    // Validation function
    let errorSMS = "";
    if (value.trim() === "") {
      errorSMS = name + " is empty";
    }

    if (type === "email") {
      // new RegExp transform pattern string to regex
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorSMS = name + " is invalid";
      }
    }
    if (type === "password") {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorSMS =
          name +
          " containing at least 8 characters 1 number 1 upper and 1 lowrecase";
      }
    }
    if (name === "repassword") {
      console.log(password, repassword);
      if (value !== password) {
        errorSMS = name + " is incorrect";
      }
    }
    if (name === "phone") {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorSMS = name + " is invalid";
      }
      if (value.length < 9) {
        errorSMS = name + " number is less than 9";
      }
    }

    let users = { ...userSignup.userInput, [name]: value };
    let error = { ...userSignup.errors, [name]: errorSMS };

    setUserSignup({
      userInput: users,
      errors: error,
    });
    // setErrorSignup({ ...userSignup.errors, [name]: errorSMS });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postUserSignUp(
        userSignup.userInput.userName,
        userSignup.userInput.password,
        userSignup.userInput.name,
        userSignup.userInput.phone,
        userSignup.userInput.maNhom,
        userSignup.userInput.email,
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
              <div className="form-error">{userSignup.errors.name}</div>
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
              <div className="form-error">{userSignup.errors.userName}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                className="form-input"
                placeholder="************"
                name="password"
                onChange={handleOnchange}
              />
              <div className="form-error">{userSignup.errors.password}</div>
            </div>
            <div className="form-group">
              <label htmlFor="repassword" className="form-label">
                Repeat password
              </label>
              <input
                type="password"
                id="repassword"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
                className="form-input"
                placeholder="************"
                name="repassword"
                onChange={handleOnchange}
              />
              <div className="form-error">{userSignup.errors.repassword}</div>
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
                pattern="^[0-9]+$"
                onChange={handleOnchange}
              />
              <div className="form-error">{userSignup.errors.phone}</div>
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
                pattern="^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]"
                onChange={handleOnchange}
              />
              <div className="form-error">{userSignup.errors.email}</div>
            </div>

            <div className="form-group switch-to-signin">
              Already a member?{" "}
              <NavLink to="/signin" className="signup-term-link">
                Sign In now
              </NavLink>
            </div>
            <button type="submit" className="btn--gradient">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
