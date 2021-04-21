import Courses from "../pages/admin/course";
import Dashboard from "../pages/admin/dashboard";
import Register from "../pages/admin/register";
import User from "../pages/admin/user";
import Category from "../pages/main/categories";
import CourseDetail from "../pages/main/course-detail";
import Home from "../pages/main/home";
import UserProfile from "../pages/main/user-profile";

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
    path: "/user-profile",
    exact: true,
    component: UserProfile,
  },
  {
    path: "/category/:name",
    exact: true,
    component: Category,
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
