// Admin
import AdminCourseManage from "../pages/admin/adminCourseManage";
import AdminUserManage from "../pages/admin/adminUserManage";
import Dashboard from "../pages/admin/dashboard";
// Main
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
    path: "/admin/user-manage",
    exact: true,
    component: AdminUserManage,
  },
  {
    path: "/admin/course-manage",
    exact: true,
    component: AdminCourseManage,
  },
];
