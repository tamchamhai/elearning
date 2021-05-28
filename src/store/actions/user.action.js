import axios from "axios";
import {
  CHANGE_PROFILE_FAILE,
  CHANGE_PROFILE_SUCCESS,
  GET_USER_DETAIL_FAILE,
  GET_USER_DETAIL_SUCCESS,
  REGISTER_COURSE_FAILE,
  REGISTER_COURSE_SUCCESS,
  SIGNIN_FAILE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILE,
  SIGNUP_SUCCESS,
} from "../constants/user.const";
import swal from "sweetalert";

export const postUserSignIn = (Username, password, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
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

export const postUserUpdate = (
  taiKhoan,
  hoTen,
  soDT,
  email,
  maNhom,
  matKhau,
  maLoaiNguoiDung,
  token
) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: {
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        hoTen: hoTen,
        soDT: soDT,
        maLoaiNguoiDung: maLoaiNguoiDung,
        maNhom: maNhom,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert("update success");
        dispatch(putUserUpdateSuccess(res.data));
        dispatch(postUserSigninSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(putUserUpdateFaile(err));
      });
  };
};
export const putUserUpdateSuccess = (user) => {
  return {
    type: CHANGE_PROFILE_SUCCESS,
    payload: user,
  };
};
export const putUserUpdateFaile = (err) => {
  return {
    type: CHANGE_PROFILE_FAILE,
    payload: err,
  };
};

export const registerCourse = (courseId, userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      data: {
        maKhoaHoc: courseId,
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        swal("Good job!", "You Got The Course!", "success");
      })
      .catch((err) => {
        swal("Opps!", "You have registered this course already!", "error");
      });
  };
};
export const registerCourseSuccess = (res) => {
  return {
    type: REGISTER_COURSE_SUCCESS,
    payload: res,
  };
};
export const registerCourseFaile = (err) => {
  return {
    type: REGISTER_COURSE_FAILE,
    payload: err,
  };
};

export const getUserDetail = (userId, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: userId,
        // matKhau: "string",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(getUserDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserDetailFaile(err));
      });
  };
};
export const getUserDetailSuccess = (res) => {
  return {
    type: GET_USER_DETAIL_SUCCESS,
    payload: res,
  };
};
export const getUserDetailFaile = (err) => {
  return {
    type: GET_USER_DETAIL_FAILE,
    payload: err,
  };
};
