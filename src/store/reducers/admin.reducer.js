import {
  ADMIN_LOGOUT,
  DELETE_USER_FAILE,
  DELETE_USER_SUCCESS,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
  KEY_ADD_EDIT,
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
  USER_MODAL,
} from "../constants/admin.const";

const initialState = {
  adminSignin: null,
  renderKey: "signin",
  userAdminPage: null,
  deleteUserAdmin: true,
  userModal: null,
  keyAddEdit: null,
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
    case DELETE_USER_SUCCESS:
      let change = state.deleteUserAdmin;
      return { ...state, deleteUserAdmin: !change };
    case DELETE_USER_FAILE:
      return { ...state, error: payload };
    case USER_MODAL:
      return { ...state, userModal: payload };
    case KEY_ADD_EDIT:
      return { ...state, keyAddEdit: payload };
    default:
      return { ...state };
  }
};

export default adminReducer;
