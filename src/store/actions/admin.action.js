import {
  ADMIN_LOGOUT,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
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
        dispatch(postAdminSigninSuccess(res.data));
        localStorage.setItem("adminSignin", JSON.stringify(res.data));
      })
      .catch((err) => {
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

export const getUserAdminPage = (groupID, pageNum, searchKey) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: searchKey
        ? `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${groupID}&tuKhoa=${searchKey}&page=${pageNum}&pageSize=10`
        : `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${groupID}&page=${pageNum}&pageSize=10`,
    })
      .then((res) => {
        dispatch(getUserAdminPageSuccess(res.data.items));
      })
      .catch((err) => {
        dispatch(getUserAdminPageFaile(err));
      });
  };
};
export const getUserAdminPageSuccess = (res) => {
  return {
    type: GET_USER_ADMIN_PAGE_SUCCESS,
    payload: res,
  };
};
export const getUserAdminPageFaile = (err) => {
  return {
    type: GET_USER_ADMIN_PAGE_FAILE,
    payload: err,
  };
};

export const postAdminLogout = (data) => {
  return {
    type: ADMIN_LOGOUT,
    payload: data,
  };
};
