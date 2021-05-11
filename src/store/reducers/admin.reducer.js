import {
  ADMIN_LOGOUT,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
} from "../constants/admin.const";

const initialState = {
  adminSignin: null,
  renderKey: "signin",
  userAdminPage: null,
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
    default:
      return { ...state };
  }
};

export default adminReducer;
