import {
  ADMIN_LOGOUT,
  COURSE_KEY_MODAL,
  COURSE_MODAL,
  DELETE_USER_FAILE,
  DELETE_USER_SUCCESS,
  GET_COURSE_ADMIN_PAGE_FAILE,
  GET_COURSE_ADMIN_PAGE_SUCCESS,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
  GET_USER_LIST_SUCCESS,
  KEY_ADD_EDIT,
  POST_ADD_USER_FAILE,
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
  PUT_UPDATA_USER_FAILE,
  USER_MODAL,
} from "../constants/admin.const";

const initialState = {
  adminSignin: null,
  renderKey: "signin",
  userAdminPage: null,
  courseAdminPage: null,
  deleteUserAdmin: true,
  userModal: null,
  keyAddEdit: null,
  userTutorList: null,
  courseModal: null,
  courseKeyModal: null,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_ADMIN_SIGNIN_SUCCESS:
      if (payload.maLoaiNguoiDung === "HV") {
        return { ...state, error: "you are not a teacher!" };
      } else {
        return { ...state, adminSignin: payload, renderKey: "dashboard" };
      }
    case POST_ADMIN_SIGNIN_FAILE:
      return { ...state, error: payload };
    case ADMIN_LOGOUT:
      return { ...state, renderKey: payload };
    case GET_USER_ADMIN_PAGE_SUCCESS:
      return { ...state, userAdminPage: payload };
    case GET_USER_ADMIN_PAGE_FAILE:
      return { ...state, error: payload };
    case GET_COURSE_ADMIN_PAGE_SUCCESS:
      return { ...state, courseAdminPage: payload };
    case GET_COURSE_ADMIN_PAGE_FAILE:
      return { ...state, error: payload };
    case DELETE_USER_SUCCESS:
      let change = state.deleteUserAdmin;
      return { ...state, deleteUserAdmin: !change };
    case DELETE_USER_FAILE:
      return { ...state, error: payload };
    case USER_MODAL:
      return { ...state, userModal: payload };
    case KEY_ADD_EDIT:
      return { ...state, keyAddEdit: payload };
    case PUT_UPDATA_USER_FAILE:
      return { ...state, error: payload };
    case POST_ADD_USER_FAILE:
      return { ...state, error: payload };
    case COURSE_MODAL:
      return { ...state, courseModal: payload };
    case COURSE_KEY_MODAL:
      return { ...state, courseKeyModal: payload };
    case GET_USER_LIST_SUCCESS:
      return { ...state, userTutorList: payload };
    default:
      return { ...state };
  }
};

export default adminReducer;
