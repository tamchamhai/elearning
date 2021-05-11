import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./components/main/footer";
import Header from "./components/main/header";
import { adminRouter, mainRouter } from "./config/router";
import RouterAdminTemplate from "./templates/admin";
import RouterMainTemplate from "./templates/main";
import { postUserSigninSuccess } from "./store/actions/user.action";
import {
  getCategories,
  getCategoriesSuccess,
} from "./store/actions/courses.action";
import "./sassStyle/_main.scss";
import React from "react";
import { postAdminSigninSuccess } from "./store/actions/admin.action";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, component }, index) => {
      return (
        // <React.Fragment key={index}>
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={component}
          key={index}
        ></RouterMainTemplate>
        // </React.Fragment>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, component }, index) => {
      return (
        // <React.Fragment key={index}>
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={component}
          key={index}
        ></RouterAdminTemplate>
        // </React.Fragment>
      );
    });
  };

  const dispatch = useDispatch();
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));
  const adminSignin = JSON.parse(localStorage.getItem("adminSignin"));
  const categories = JSON.parse(localStorage.getItem("categories"));
  useEffect(() => {
    dispatch(postUserSigninSuccess(userSignin));
    dispatch(getCategories());
    dispatch(getCategoriesSuccess(categories));
    if (adminSignin) {
      dispatch(postAdminSigninSuccess(adminSignin));
    }
  });
  return (
    <>
      <BrowserRouter>
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
