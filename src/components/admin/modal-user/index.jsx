import React, { useState } from "react";
import "./style.scss";

function ModalUser({ data, id }) {
  // useState
  const [dismissModal, setDismissModal] = useState("");

  // handle function
  const handleAddUser = () => {};
  const handleSubmitAddUser = () => {};

  // render function
  const renderErrorAddUser = () => {};

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
                    onChange={handleAddUser}
                    value={data?.taiKhoan}
                  />
                  <div className="errorAddUser">
                    <p>{renderErrorAddUser()}</p>
                  </div>
                </div>

                <div className="form-group">
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
                    onChange={handleAddUser}
                  />
                  <div className="errorAddUser">
                    <p>{renderErrorAddUser()}</p>
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
                    onChange={handleAddUser}
                  />
                  <div className="errorAddUser">
                    <p>{renderErrorAddUser()}</p>
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
                    onChange={handleAddUser}
                  />
                  <div className="errorAddUser">
                    <p>{renderErrorAddUser()}</p>
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
                    onChange={handleAddUser}
                  />
                  <div className="errorAddUser">
                    <p>{renderErrorAddUser()}</p>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-add-user"
                    id="role"
                    onChange={handleAddUser}
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
