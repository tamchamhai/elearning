import {
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
} from "../constants/admin.const";

const initialState = {
  adminSignin: null,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_ADMIN_SIGNIN_SUCCESS:
      return { ...state, adminSignin: payload };
    case POST_ADMIN_SIGNIN_FAILE:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default adminReducer;
