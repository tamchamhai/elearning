import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import { NavLink, useHistory } from "react-router-dom";
import { postUserSignIn } from "../../../store/actions/user.action";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    Username: "",
    password: "",
  });

  const handleSignin = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserSignIn(user.Username, user.password, history));
  };

  return (
    <div className="d-flex justify-content-center align-items-center signup-cover ">
      <div className="signup row">
        <img
          src="https://imgur.com/aILP3CD.png"
          alt="sign in img"
          className="d-none d-md-block col-md-6 signin-image"
        />

        <div className="signup-container col-md-6 col-12">
          <h1 className="signup-heading">Sign In</h1>
          <form
            className="signup-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="form-group">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="Username"
                className="form-input"
                placeholder="Ex: John Doe"
                required
                name="Username"
                onChange={handleSignin}
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
                placeholder="************"
                required
                name="password"
                onChange={handleSignin}
              />
            </div>
            <div className="form-group switch-to-signin">
              Not a member?{" "}
              <NavLink to="/signup" className="signup-term-link">
                Sign up now
              </NavLink>
            </div>
            <button type="submit" className="btn btn--gradient">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
