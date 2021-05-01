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

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, component }, index) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={component}
          key={index}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, component }, index) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={component}
          key={index}
        ></RouterAdminTemplate>
      );
    });
  };

  const dispatch = useDispatch();
  const userSignin = JSON.parse(localStorage.getItem("userSignin"));
  const categories = JSON.parse(localStorage.getItem("categories"));
  useEffect(() => {
    dispatch(postUserSigninSuccess(userSignin));
    dispatch(getCategories());
    dispatch(getCategoriesSuccess(categories));
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
