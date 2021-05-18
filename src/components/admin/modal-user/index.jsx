import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function ModalUser() {
  const dispatch = useDispatch();
  const { userModal } = useSelector((state) => state.admin);
  const { keyAddEdit } = useSelector((state) => state.admin);

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
    },
    keyAddEdit: keyAddEdit,
  });

  // handle function
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    const tempUser = { ...user.data, [name]: value };
    setUser({ data: tempUser });
    console.log(name, value);
  };
  const handleSubmitAddUser = () => {};

  // render function
  const renderErrorAddUser = () => {};
  const renderBtn = () => {
    if (user.keyAddEdit === "edit-btn") {
      return (
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      );
    } else if (user.keyAddEdit === "add-btn") {
      return (
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      );
    }
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
    console.log(user.data);
    console.log(user.keyAddEdit);
  }, [userModal, keyAddEdit]);

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
                onSubmit={handleSubmitAddUser}
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
                  <div className="error">{renderErrorAddUser()}</div>
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
                </div>

                <div className="form-group">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-add-user"
                    id="role"
                    name="role"
                    onChange={handleOnChange}
                    value={user.data.role ? user.data.role : ""}
                  >
                    <option value="GV">Tutor</option>
                    <option value="HV">Student</option>
                  </select>
                </div>
              </form>
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
              {renderBtn()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
