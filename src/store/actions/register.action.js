import axios from "axios";
import {
  DATA_COURSE_REGISTER,
  DATA_USER_REGISTER,
  KEY_REGISTER,
  POST_COURSE_CANCEL_REGISTER_SUCCESS,
  POST_COURSE_CONFIRMED_SUCCESS,
  POST_COURSE_NOT_REGISTER_SUCCESS,
  POST_COURSE_PENDING_SUCCESS,
  POST_COURSE_REGISTER_SUCCESS,
  POST_USER_CONFIRMED_SUCCESS,
  POST_USER_NOT_REGISTER_SUCCESS,
  POST_USER_PENDING_SUCCESS,
  POST_USER_REGISTER_SUCCESS,
} from "../constants/register.const";
import swal from "sweetalert";

export const dataUserRegister = (data) => {
  return {
    type: DATA_USER_REGISTER,
    payload: data,
  };
};
export const dataCourseRegister = (data) => {
  return {
    type: DATA_COURSE_REGISTER,
    payload: data,
  };
};

// Handle post course not register
export const postCourseNotRegister = (userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${userName}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(postCourseNotRegisterSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postCourseNotRegisterSuccess = (res) => {
  return {
    type: POST_COURSE_NOT_REGISTER_SUCCESS,
    payload: res,
  };
};

// Handle post confirmed course
export const postCourseConfirmed = (userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
      data: {
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(postCourseConfirmedSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postCourseConfirmedSuccess = (res) => {
  return {
    type: POST_COURSE_CONFIRMED_SUCCESS,
    payload: res,
  };
};

// Handle post pending course
export const postCoursePending = (userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
      data: {
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(postCoursePendingSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postCoursePendingSuccess = (res) => {
  return {
    type: POST_COURSE_PENDING_SUCCESS,
    payload: res,
  };
};

// Key register (course/user)
export const getKeyRegister = (res) => {
  return {
    type: KEY_REGISTER,
    payload: res,
  };
};

// Handle post course register
export const postCourseRegister = (courseID, userName, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",
      data: {
        maKhoaHoc: courseID,
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        swal("Good job!", "Register Course Success!", "success");
        dispatch(postCourseRegisterSuccess());
      })
      .catch((err) => {
        swal("Opps!", "Register Course Faile!", "error");
      });
  };
};
export const postCourseRegisterSuccess = (res) => {
  return {
    type: POST_COURSE_REGISTER_SUCCESS,
    payload: res,
  };
};

export const postCourseCancelRegister = (userName, courseID, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
      data: {
        maKhoaHoc: courseID,
        taiKhoan: userName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        swal("Good job!", "Cancel Course Success!", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Opps!", "Cancel Course Faile!", "error");
      });
  };
};
export const postCourseCancelRegisterSuccess = (res) => {
  return {
    type: POST_COURSE_CANCEL_REGISTER_SUCCESS,
    payload: res,
  };
};

// handle user not register
export const postUserNotRegister = (courseID, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      data: {
        maKhoaHoc: courseID,
      },
      headers: {
        Authorization: `Bearer ${token} `,
      },
    })
      .then((res) => {
        dispatch(postUserNotRegisterSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postUserNotRegisterSuccess = (res) => {
  return {
    type: POST_USER_NOT_REGISTER_SUCCESS,
    payload: res,
  };
};

//  handle user registered
export const postUserConfirmed = (courseID, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
      data: {
        maKhoaHoc: courseID,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(postUserConfirmedSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postUserConfirmedSuccess = (res) => {
  return {
    type: POST_USER_CONFIRMED_SUCCESS,
    payload: res,
  };
};

// Handle user pending
export const postUserPending = (courseID, token) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
      data: {
        maKhoaHoc: courseID,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(postUserPendingSuccess(res.data));
      })
      .catch((err) => {});
  };
};
export const postUserPendingSuccess = (res) => {
  return {
    type: POST_USER_PENDING_SUCCESS,
    payload: res,
  };
};
