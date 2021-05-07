import {
  GET_CATEGORIES_FAILE,
  GET_CATEGORIES_SUCCESS,
  GET_COURSES_OF_CATEGORY_FAILE,
  GET_COURSES_OF_CATEGORY_SUCCESS,
  GET_COURSE_DETAIL_FAILE,
  GET_COURSE_DETAIL_SUCCESS,
  GET_LIST_COURSE_FAILE,
  GET_LIST_COURSE_SUCCESS,
  POST_CANCEL_REGISTER_SUCCESS,
  POST_CANCEL_REGISTER_FAILE,
} from "../constants/courses.const";
import { startLoading, stopLoading } from "./common.action";
import axios from "axios";
import { getUserDetail } from "./user.action";
// Get all course from the list
export const getListCourses = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res) => {
        dispatch(getListCourseSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getListCourseFaile(err));
        dispatch(stopLoading());
      });
  };
};

// Get the course from search
export const getSearchCourse = (courseName) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=GP01`,
    })
      .then((res) => {
        dispatch(getListCourseSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getListCourseFaile(err));
        dispatch(stopLoading());
      });
  };
};
const getListCourseSuccess = (listCourse) => {
  return {
    type: GET_LIST_COURSE_SUCCESS,
    payload: listCourse,
  };
};
const getListCourseFaile = (err) => {
  return {
    type: GET_LIST_COURSE_FAILE,
    payload: err,
  };
};

// Get categories
export const getCategories = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((res) => {
        dispatch(getCategoriesSuccess(res.data));
        localStorage.setItem("categories", JSON.stringify(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getCategoriesFaile(err));
        dispatch(stopLoading());
      });
  };
};

export const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};
const getCategoriesFaile = (error) => {
  return {
    type: GET_CATEGORIES_FAILE,
    payload: error,
  };
};

// Get list course of category
export const getCoursesOfCategory = (params) => {
  return (dispatch) => {
    dispatch(startLoading());
    console.log(params);
    axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${params}&MaNhom=GP01`,
    })
      .then((res) => {
        dispatch(getCoursesOfCategorySuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getCourseOfCategoryFaile(err));
        dispatch(stopLoading());
      });
  };
};

const getCoursesOfCategorySuccess = (course) => {
  return {
    type: GET_COURSES_OF_CATEGORY_SUCCESS,
    payload: course,
  };
};
const getCourseOfCategoryFaile = (err) => {
  return {
    type: GET_COURSES_OF_CATEGORY_FAILE,
    payload: err,
  };
};

// Get course detail
export const getCourseDetail = (params) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      mothod: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${params}`,
    })
      .then((res) => {
        dispatch(getCourseDetailSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getCourseDetailFaile(err));
        dispatch(stopLoading());
      });
  };
};

export const getCourseDetailSuccess = (course) => {
  return {
    type: GET_COURSE_DETAIL_SUCCESS,
    payload: course,
  };
};
export const getCourseDetailFaile = (err) => {
  return {
    type: GET_COURSE_DETAIL_FAILE,
    payload: err,
  };
};

export const postCancelRegisterCourse = (courseId, userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
      data: {
        maKhoaHoc: courseId,
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(postCancelRegisterSuccess(res.data));
        dispatch(getUserDetail(userName, token));
        alert("Cancel register success!");
      })
      .catch((err) => {
        console.log(err);
        dispatch(postCancelRegisterFaile(err));
        alert("Cancel register faile!");
      });
  };
};
export const postCancelRegisterSuccess = (res) => {
  return {
    type: POST_CANCEL_REGISTER_SUCCESS,
    payload: res,
  };
};
export const postCancelRegisterFaile = (err) => {
  return {
    type: POST_CANCEL_REGISTER_FAILE,
    payload: err,
  };
};
