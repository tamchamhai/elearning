import {
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
} from "../constants/admin.const";
import axios from "axios";

export const postAdminSignin = (username, password) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan: username,
        matKhau: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(postAdminSigninSuccess(res.data));
        localStorage.setItem("adminSignin", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(postAdminSigninFaile(err));
      });
  };
};
export const postAdminSigninSuccess = (res) => {
  return {
    type: POST_ADMIN_SIGNIN_SUCCESS,
    payload: res,
  };
};
export const postAdminSigninFaile = (err) => {
  return {
    type: POST_ADMIN_SIGNIN_FAILE,
    payload: err,
  };
};
