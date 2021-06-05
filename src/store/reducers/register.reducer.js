import {
  DATA_COURSE_REGISTER,
  DATA_USER_REGISTER,
  KEY_REGISTER,
  POST_COURSE_CONFIRMED_SUCCESS,
  POST_COURSE_NOT_REGISTER_SUCCESS,
  POST_COURSE_PENDING_SUCCESS,
  POST_COURSE_REGISTER_SUCCESS,
  POST_USER_CONFIRMED_SUCCESS,
  POST_USER_NOT_REGISTER_SUCCESS,
  POST_USER_PENDING_SUCCESS,
  POST_USER_REGISTER_SUCCESS,
} from "../constants/register.const";

const initialState = {
  registerUser: [],
  registerCourse: [],
  keyRegister: "",
  courseNotRegister: null,
  userNotRegister: null,
  courseConfirmed: [],
  userConfirmed: [],
  coursePending: [],
  userPending: [],
  actionSuccess: true,
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_USER_REGISTER:
      return { ...state, registerUser: payload };
    case DATA_COURSE_REGISTER:
      return { ...state, registerCourse: payload };
    case POST_COURSE_NOT_REGISTER_SUCCESS:
      return { ...state, courseNotRegister: payload };
    case POST_COURSE_CONFIRMED_SUCCESS:
      return { ...state, courseConfirmed: payload };
    case POST_COURSE_PENDING_SUCCESS:
      return { ...state, coursePending: payload };
    case KEY_REGISTER:
      return { ...state, keyRegister: payload };
    case POST_COURSE_REGISTER_SUCCESS:
      const temp = state.actionSuccess;
      return { ...state, actionSuccess: !temp };
    case POST_USER_NOT_REGISTER_SUCCESS:
      return { ...state, userNotRegister: payload };
    case POST_USER_CONFIRMED_SUCCESS:
      return { ...state, userConfirmed: payload };
    case POST_USER_PENDING_SUCCESS:
      return { ...state, userPending: payload };
    default:
      return { ...state };
  }
};

export default registerReducer;
