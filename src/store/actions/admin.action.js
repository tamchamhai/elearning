import {
  ADMIN_LOGOUT,
  DELETE_USER_FAILE,
  DELETE_USER_SUCCESS,
  GET_USER_ADMIN_PAGE_FAILE,
  GET_USER_ADMIN_PAGE_SUCCESS,
  KEY_ADD_EDIT,
  POST_ADD_USER_FAILE,
  POST_ADD_USER_SUCCESS,
  POST_ADMIN_SIGNIN_FAILE,
  POST_ADMIN_SIGNIN_SUCCESS,
  PUT_UPDATA_USER_FAILE,
  PUT_UPDATA_USER_SUCCESS,
  USER_MODAL,
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
        alert("Delete success!");
      })
      .catch((err) => {
        dispatch(deleteUserFaile(err));
        alert("This account is still alive!");
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
