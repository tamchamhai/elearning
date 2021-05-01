import Courses from "../pages/admin/course";
import Dashboard from "../pages/admin/dashboard";
import Register from "../pages/admin/register";
import User from "../pages/admin/user";
import Category from "../pages/main/categories";
import CourseDetail from "../pages/main/course-detail";
import Home from "../pages/main/home";
import SignIn from "../pages/main/sign-in";
import SignUp from "../pages/main/sign-up";
import UserProfile from "../pages/main/user";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/course-detail/:courseId",
    exact: true,
    component: CourseDetail,
  },
  {
    path: "/user",
    exact: true,
    component: UserProfile,
  },
  {
    path: "/category/:name",
    exact: true,
    component: Category,
  },
  {
    path: "/signin",
    exact: true,
    component: SignIn,
  },
  {
    path: "/signup",
    exact: true,
    component: SignUp,
  },
];

// Admin template
export const adminRouter = [
  {
    path: "/admin/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/admin/courses",
    exact: true,
    component: Courses,
  },
  {
    path: "/admin/register",
    exact: true,
    component: Register,
  },
  {
    path: "/admin/user",
    exact: true,
    component: User,
  },
];
