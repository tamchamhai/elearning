import {
  GET_CATEGORIES_FAILE,
  GET_CATEGORIES_SUCCESS,
  GET_COURSES_OF_CATEGORY_FAILE,
  GET_COURSES_OF_CATEGORY_SUCCESS,
  GET_LIST_COURSE_FAILE,
  GET_LIST_COURSE_SUCCESS,
} from "../constants/courses.const";
import { startLoading, stopLoading } from "./common.action";
import axios from "axios";

export const getListCourses = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getListCourseSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getListCourseFaile(err));
        console.log(err);
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

export const getCategories = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((res) => {
        dispatch(getCategoriesSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(getCategoriesFaile(err));
      });
  };
};

const getCategoriesSuccess = (categories) => {
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
        dispatch(stopLoading());
        dispatch(getCoursesOfCategorySuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getCourseOfCategoryFaile(err));
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
