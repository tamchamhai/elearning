import axios from "axios";
import {
  LOGOUT,
  SIGNIN_FAILE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILE,
  SIGNUP_SUCCESS,
} from "../constants/user.const";

export const postUserSignIn = (Username, password, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan: Username,
        matKhau: password,
      },
    })
      .then((res) => {
        localStorage.setItem("userSignin", JSON.stringify(res.data));
        dispatch(postUserSigninSuccess(res.data));
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
        dispatch(postUserSigninFaile(err));
      });
  };
};

export const postUserSigninSuccess = (userSignin) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: userSignin,
  };
};
export const postUserSigninFaile = (err) => {
  return {
    type: SIGNIN_FAILE,
    payload: err,
  };
};

export const postUserSignUp = (
  userName,
  password,
  name,
  phone,
  maNhom,
  email,
  history
) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: {
        taiKhoan: userName,
        matKhau: password,
        hoTen: name,
        soDT: phone,
        maNhom: maNhom,
        email: email,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(postSignUpSuccess(res.data));
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
        dispatch(postSignUpFaile(err));
      });
  };
};

export const postSignUpSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};
export const postSignUpFaile = (err) => {
  return {
    type: SIGNUP_FAILE,
    payload: err,
  };
};
