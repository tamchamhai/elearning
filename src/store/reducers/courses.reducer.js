import {
  ADD_TO_CART_COURSE,
  GET_CATEGORIES_FAILE,
  GET_CATEGORIES_SUCCESS,
  GET_COURSES_OF_CATEGORY_FAILE,
  GET_COURSES_OF_CATEGORY_SUCCESS,
  GET_COURSE_DETAIL_FAILE,
  GET_COURSE_DETAIL_SUCCESS,
  GET_LIST_COURSE_FAILE,
  GET_LIST_COURSE_SUCCESS,
  GET_SEARCH_KEY,
  POST_CANCEL_REGISTER_FAILE,
  POST_CANCEL_REGISTER_SUCCESS,
} from "../constants/courses.const";

const initialState = {
  courseList: [],
  categories: [],
  coursesOfCategory: [],
  courseDetail: [],
  cancelRegister: [],
  courseInCart: [],
  searchKey: "",
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
    case POST_CANCEL_REGISTER_SUCCESS:
      return { ...state, cancelRegister: payload };
    case POST_CANCEL_REGISTER_FAILE:
      return { ...state, error: payload };
    case ADD_TO_CART_COURSE:
      let addCourseList = state.courseInCart;
      const index = addCourseList.findIndex(
        (course) => course.maKhoaHoc === payload.maKhoaHoc
      );
      if (index === -1) {
        addCourseList.push(payload);
      }
      return { ...state, courseInCart: addCourseList };
    case GET_SEARCH_KEY:
      return { ...state, searchKey: payload };
    default:
      return { ...state };
  }
};

export default courseReducer;
