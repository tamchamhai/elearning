import {
  GET_CATEGORIES_FAILE,
  GET_CATEGORIES_SUCCESS,
  GET_COURSES_OF_CATEGORY_FAILE,
  GET_COURSES_OF_CATEGORY_SUCCESS,
  GET_COURSE_DETAIL_FAILE,
  GET_COURSE_DETAIL_SUCCESS,
  GET_LIST_COURSE_FAILE,
  GET_LIST_COURSE_SUCCESS,
} from "../constants/courses.const";

const initialState = {
  courseList: [],
  categories: [],
  coursesOfCategory: [],
  courseDetail: [],
  error: [],
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_COURSE_SUCCESS:
      return { ...state, courseList: payload };
    case GET_LIST_COURSE_FAILE:
      return { ...state, error: payload };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: payload };
    case GET_CATEGORIES_FAILE:
      return { ...state, error: payload };
    case GET_COURSES_OF_CATEGORY_SUCCESS:
      return { ...state, coursesOfCategory: payload };
    case GET_COURSES_OF_CATEGORY_FAILE:
      return { ...state, error: payload };
    case GET_COURSE_DETAIL_SUCCESS:
      return { ...state, courseDetail: payload };
    case GET_COURSE_DETAIL_FAILE:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default courseReducer;
