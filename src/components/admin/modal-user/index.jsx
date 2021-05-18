import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postAddUser,
  putUpdataUser,
} from "../../../store/actions/admin.action";
import "./style.scss";

function ModalUser() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("adminSignin")).accessToken;
  const { userModal } = useSelector((state) => state.admin);
  const { keyAddEdit } = useSelector((state) => state.admin);
  const { error } = useSelector((state) => state.admin);

  // useState
  const [dismissModal, setDismissModal] = useState("");
  const [user, setUser] = useState({
    data: {
      Username: userModal?.taiKhoan,
      fullname: userModal?.hoTen,
      password: userModal?.matKhau,
      email: userModal?.email,
      phonenumber: userModal?.soDT,
      role: userModal?.maLoaiNguoiDung,
      groupID: userModal?.maNhom,
    },
    keyAddEdit: keyAddEdit,
  });
  const [userError, setError] = useState({
    severError: error,
    onChangeError: {
      Username: "",
      fullname: "",
      password: "",
      email: "",
      phonenumber: "",
      role: "",
      groupID: "",
    },
  });

  // handle function
  const handleOnChange = (event) => {
    let smsError = "";
    const { name, value } = event.target;

    if (value.trim() === "") {
      smsError = name + " is empty";
    }

    const tempError = { ...userError.onChangeError, [name]: smsError };
    const tempUser = { ...user.data, [name]: value };

    console.log(userError.onChangeError);
    setError({ ...userError, onChangeError: tempError });
    setUser({ ...user, data: tempUser });
  };
  const handleSubmitAddEditUser = (e) => {
    e.preventDefault();

    if (keyAddEdit === "add-btn") {
      dispatch(
        postAddUser(
          user.data.Username,
          user.data.password,
          user.data.fullname,
          user.data.phonenumber,
          user.data.role,
          user.data.groupID,
          user.data.email,
          token
        )
      );
    } else if (keyAddEdit === "edit-btn") {
      dispatch(
        putUpdataUser(
          user.data.Username,
          user.data.password,
          user.data.fullname,
          user.data.phonenumber,
          user.data.role,
          user.data.groupID,
          user.data.email,
          token
        )
      );
    }
  };

  // render function
  const renderErrorAddUser = () => {
    return error ? "Username or Email is already exist!" : "";
  };

  // componentDidmount
  useEffect(() => {
    if (userModal) {
      setUser({
        ...user,
        data: {
          Username: userModal?.taiKhoan,
          fullname: userModal?.hoTen,
          password: userModal?.matKhau,
          email: userModal?.email,
          phonenumber: userModal?.soDT,
          role: userModal?.maLoaiNguoiDung,
        },
        keyAddEdit: keyAddEdit,
      });
    } else {
      setUser({
        ...user,
        data: {
          Username: null,
          fullname: null,
          password: null,
          email: null,
          phonenumber: null,
          role: null,
        },
        keyAddEdit: keyAddEdit,
      });
    }
  }, [userModal, keyAddEdit, error]);

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="user-modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="title-modal" id="exampleModalLabel">
                Add User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* Body */}
            <div className="modal-body">
              <form
                className="add-user-form"
                onSubmit={handleSubmitAddEditUser}
                autoComplete="off"
              >
                <div className="form-group">
                  <label htmlFor="Username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="Username"
                    className="form-add-user"
                    placeholder="Ex: John Doe"
                    required
                    name="Username"
                    onChange={handleOnChange}
                    value={user.data.Username ? user.data?.Username : ""}
                  />
                  <div className="render-errors">
                    <p>{userError.onChangeError.Username}</p>
                  </div>
                </div>

                <div className={"form-group"}>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-add-user"
                    placeholder="************"
                    required
                    name="password"
                    onChange={handleOnChange}
                    value={user.data.password ? user.data.password : ""}
                  />
                  <div className="render-errors">
                    <p>{userError.onChangeError.password}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-add-user"
                    placeholder="Ex: JohnDoe"
                    required
                    name="fullname"
                    onChange={handleOnChange}
                    value={user.data.fullname ? user.data.fullname : ""}
                  />
                  <div className="render-errors">
                    <p>{userError.onChangeError.fullname}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-add-user"
                    placeholder="Ex: John@email.com"
                    required
                    name="email"
                    onChange={handleOnChange}
                    value={user.data.email ? user.data.email : ""}
                  />
                  <div className="render-errors">
                    <p>{userError.onChangeError.email}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phonenumber"
                    className="form-add-user"
                    placeholder="Phone number"
                    name="phonenumber"
                    onChange={handleOnChange}
                    value={user.data.phonenumber ? user.data.phonenumber : ""}
                  />
                  <div className="render-errors">
                    <p>{userError.onChangeError.phonenumber}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-add-user"
                    id="role"
                    name="role"
                    required
                    onChange={handleOnChange}
                    value={user.data.role ? user.data.role : ""}
                  >
                    <option value="Choose your role!">Choose your role!</option>
                    <option value="GV">Tutor</option>
                    <option value="HV">Student</option>
                  </select>
                  <div className="render-errors">
                    <p>{userError.onChangeError.role}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="groupID" className="form-label">
                    group ID
                  </label>
                  <select
                    className="form-add-user"
                    id="groupID"
                    name="groupID"
                    required
                    onChange={handleOnChange}
                    value={
                      user.data.groupID
                        ? user.data.groupID
                        : "Please choose a group"
                    }
                  >
                    <option value="Please choose a group!">
                      Please choose a group!
                    </option>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP08">GP08</option>
                    <option value="GP09">GP09</option>
                  </select>
                  <div className="render-errors">
                    <p>{userError.onChangeError.groupID}</p>
                  </div>
                </div>
              </form>
              <div className="render-errors">
                <p>{renderErrorAddUser()}</p>
              </div>
            </div>
            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn close-btn"
                data-dismiss={dismissModal}
                onClick={() => {
                  const confirmBox = window.confirm(
                    "If you leave, your change will unsave"
                  );
                  if (confirmBox === true) {
                    setDismissModal("modal");
                  }
                }}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmitAddEditUser}
              >
                {keyAddEdit === "add-btn" ? "Add" : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
