import {
  ADMIN_LOGOUT,
  DELETE_COURSE_FAILE,
  DELETE_COURSE_SUCCESS,
  DELETE_USER_FAILE,
  DELETE_USER_SUCCESS,
  GET_COURSE_ADMIN_PAGE_FAILE,
  GET_COURSE_ADMIN_PAGE_SUCCESS,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
  KEY_ADD_EDIT,
  POST_ADD_COURSE_FAILE,
  POST_ADD_COURSE_SUCCESS,
  POST_ADD_USER_FAILE,
  POST_ADD_USER_SUCCESS,
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
  PUT_UPDATA_USER_FAILE,
  PUT_UPDATA_USER_SUCCESS,
  USER_MODAL,
  COURSE_MODAL,
  COURSE_KEY_MODAL,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILE,
} from "../constants/admin.const";
import axios from "axios";
import swal from "sweetalert";

export const postAdminSignin = (username, password, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan: username,
        matKhau: password,
      },
    })
      .then((res) => {
        dispatch(postAdminSigninSuccess(res.data));
        localStorage.setItem("adminSignin", JSON.stringify(res.data));
        history.push("/admin/dashboard");
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

// Delete user
export const deleteUser = (userName, token) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(deleteUserSuccess(true));
        swal("Good job!", "Delete user Success!", "success");
      })
      .catch((err) => {
        dispatch(deleteUserFaile(err));
        swal("Opps!", "This account is still alive!", "error");
      });
  };
};
export const deleteUserSuccess = (res) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: res,
  };
};
export const deleteUserFaile = (err) => {
  return {
    type: DELETE_USER_FAILE,
    payload: err,
  };
};

export const userModal = (data) => {
  return {
    type: USER_MODAL,
    payload: data,
  };
};
export const keyAddEdit = (data) => {
  return {
    type: KEY_ADD_EDIT,
    payload: data,
  };
};

export const postAddUser = (
  username,
  password,
  fullname,
  phonenumber,
  role,
  groupID,
  email,
  token
) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: {
        taiKhoan: username,
        matKhau: password,
        hoTen: fullname,
        soDT: phonenumber,
        maLoaiNguoiDung: role,
        maNhom: groupID,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(postAddUserFaile(null));
        swal("Good job!", "Add user Success!", "success");
      })
      .catch((err) => {
        dispatch(postAddUserFaile(err));
        swal("Opps!", "Add user Faile!", "error");
      });
  };
};
export const postAddUserSuccess = (res) => {
  return {
    type: POST_ADD_USER_SUCCESS,
    payload: res,
  };
};
export const postAddUserFaile = (err) => {
  return {
    type: POST_ADD_USER_FAILE,
    payload: err,
  };
};

export const putUpdataUser = (
  username,
  password,
  fullname,
  phonenumber,
  role,
  groupID,
  email,
  token
) => {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: {
        taiKhoan: username,
        matKhau: password,
        hoTen: fullname,
        soDT: phonenumber,
        maLoaiNguoiDung: role,
        maNhom: groupID,
        email: email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(putUpdataUserFaile(null));
        alert("updata success");
      })
      .catch((err) => {
        dispatch(putUpdataUserFaile(err));
      });
  };
};
export const putUpdataUserSuccess = (res) => {
  return {
    type: PUT_UPDATA_USER_SUCCESS,
    payload: res,
  };
};
export const putUpdataUserFaile = (err) => {
  return {
    type: PUT_UPDATA_USER_FAILE,
    payload: err,
  };
};

export const getCourseAdminPage = (searchKey, pageIndex, group) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: searchKey
        ? `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${searchKey}&page=${pageIndex}&pageSize=10&MaNhom=${group}`
        : `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageIndex}&pageSize=10&MaNhom=${group}`,
    })
      .then((res) => {
        dispatch(getCourseAdminPageSuccess(res.data.items));
      })
      .catch((err) => {});
  };
};
export const getCourseAdminPageSuccess = (res) => {
  return {
    type: GET_COURSE_ADMIN_PAGE_SUCCESS,
    payload: res,
  };
};
export const getCourseAdminPageFaile = (err) => {
  return {
    type: GET_COURSE_ADMIN_PAGE_FAILE,
    payload: err,
  };
};

export const deleteCourse = (courseID, token) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseID}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(deleteCourseSuccess(true));
        swal("Good job!", "Delete course Success!", "success");
      })
      .catch((err) => {
        dispatch(deleteCourseFaile(err));
        swal("Oops!", "Delete course Faile!", "error");
      });
  };
};
export const deleteCourseSuccess = (res) => {
  return {
    type: DELETE_COURSE_SUCCESS,
    payload: res,
  };
};
export const deleteCourseFaile = (err) => {
  return {
    type: DELETE_COURSE_FAILE,
    payload: err,
  };
};

export const postAddCourse = (token, formData) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
      data: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
      .then((res) => {
        swal("Good job!", "Add course Success!", "success");
        dispatch(postAddCourseSuccess(true));
      })
      .catch((err) => {
        swal("Oops!", "Add course Faile!", "error");
      });
  };
};
export const postAddCourseSuccess = (res) => {
  return {
    type: POST_ADD_COURSE_SUCCESS,
    payload: res,
  };
};
export const postAddCourseFaile = (err) => {
  return {
    type: POST_ADD_COURSE_FAILE,
    payload: err,
  };
};

export const courseModal = (course) => {
  return {
    type: COURSE_MODAL,
    payload: course,
  };
};
export const courseKeyModal = (key) => {
  return {
    type: COURSE_KEY_MODAL,
    payload: key,
  };
};

export const getUserList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03",
    })
      .then((res) => {
        const userTutorList = [];
        res.data.map((item) => {
          if (item.maLoaiNguoiDung === "GV") {
            userTutorList.push(item);
          }
        });
        dispatch(getUserListSuccess(userTutorList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getUserListSuccess = (res) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: res,
  };
};
export const getUserListFaile = (err) => {
  return {
    type: GET_USER_LIST_FAILE,
    payload: err,
  };
};
