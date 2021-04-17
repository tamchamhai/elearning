import { GET_LIST_COURSES } from "../constants/courses.const";

const initialState = {
  courseList: [],
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_COURSES:
      return { ...state, courseList: payload };
    default:
      return { ...state };
  }
};

export default courseReducer;
