import {
  GET_USER_DETAIL_FAILE,
  GET_USER_DETAIL_SUCCESS,
  SIGNIN_FAILE,
  SIGNIN_SUCCESS,
} from "../constants/user.const";

const initialState = {
  userSignin: null,
  userDetail: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_SUCCESS:
      return { ...state, userSignin: payload };
    case SIGNIN_FAILE:
      return { ...state, error: payload };
    case GET_USER_DETAIL_SUCCESS:
      return { ...state, userDetail: payload };
    case GET_USER_DETAIL_FAILE:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;
