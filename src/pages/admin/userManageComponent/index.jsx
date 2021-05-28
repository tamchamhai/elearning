import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  getUserAdminPage,
  keyAddEdit,
  userModal,
} from "../../../store/actions/admin.action";
import ModalUser from "../../../components/admin/modal-user";

function UserManage() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("adminSignin"))?.accessToken;
  const { userAdminPage } = useSelector((state) => state.admin);
  const { deleteUserAdmin } = useSelector((state) => state.admin);
  // useState
  const [pageIndex, setPageIndex] = useState({
    index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    selectedIndex: 1,
  });
  const [groupID, setGroupID] = useState("GP01");
  const [keySearch, setKeySearch] = useState("");
  const [modalData, setModalData] = useState({
    keySetBtn: null,
    data: {},
  });

  // Handle function
  const handlePageSelect = (index) => {
    setPageIndex({ ...pageIndex, selectedIndex: index });
  };
  const handleDeleteUser = (userName) => {
    dispatch(deleteUser(userName, token));
  };
  const handleAddUser = () => {
    dispatch(userModal({}));
    dispatch(keyAddEdit("add-btn"));
  };
  const handleEditUser = (item) => {
    dispatch(userModal(item));
    dispatch(keyAddEdit("edit-btn"));
  };

  // Render Function
  const renderPageIndex = () => {
    return pageIndex.index.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            handlePageSelect(item);
          }}
          className={`${
            pageIndex.selectedIndex === item ? "select-class" : ""
          }`}
        >
          <span>{item}</span>
        </li>
      );
    });
  };
  const renderUserList = () => {
    return userAdminPage?.map((item, index) => {
      return (
        <tr key={index} className={`${index % 2 == 0 ? "bg-list" : ""}`}>
          <th className="item-img">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Blue02&eyeType=Default&eyebrowType=AngryNatural&mouthType=Sad&skinColor=Light" />
          </th>
          <th className="item">{item.taiKhoan}</th>
          <th className="item">{item.hoTen}</th>
          <th className="item">{item.email}</th>
          <th className="item">{item.soDT}</th>
          <th className="item">{item.maLoaiNguoiDung}</th>
          <th className="item">
            <span className="btns register">register</span>
            <span
              data-target="#user-modal"
              data-toggle="modal"
              className="btns edit"
              id="edit-user"
              onClick={() => {
                handleEditUser(item);
              }}
            >
              edit
            </span>
            <span
              className="btns delete"
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete this User"
                );
                if (confirmBox === true) {
                  handleDeleteUser(item.taiKhoan);
                }
              }}
            >
              delete
            </span>
          </th>
        </tr>
      );
    });
  };

  // useEffect
  useEffect(() => {
    dispatch(getUserAdminPage(groupID, pageIndex.selectedIndex, keySearch));
  }, [groupID, pageIndex.selectedIndex, keySearch, deleteUserAdmin]);

  return (
    <div className="cover-user-manage">
      {/* Modal */}
      <ModalUser />
      <div className="title">
        <h1>user management</h1>
        <div className="add-user-btn">
          <div className="groupID">
            <select
              className="groupID"
              id="groupID"
              onChange={(event) => {
                const { value } = event.target;
                setGroupID(value);
                console.log(userAdminPage);
              }}
            >
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
          </div>
          <button
            data-target="#user-modal"
            data-toggle="modal"
            onClick={handleAddUser}
          >
            add user
          </button>
        </div>
      </div>
      {/* Content  */}
      <div className="table-content">
        {/* search */}
        <div className="searchbar">
          <input
            type="search"
            placeholder="Username"
            onChange={(event) => {
              const { value } = event.target;
              setKeySearch(value);
              console.log(value);
            }}
          />
          <span>
            <SearchIcon />
          </span>
        </div>
        {/* render user list */}
        <div className="user-table">
          <table className="table">
            <thead className="head-table text-primary">
              <tr>
                <th className="item">No.</th>
                <th className="item">Username</th>
                <th className="item">Fullname</th>
                <th className="item">Email</th>
                <th className="item">Phone number</th>
                <th className="item">Role</th>
                <th className="item">Action</th>
              </tr>
            </thead>
            <tbody className="body-table">{renderUserList()}</tbody>
          </table>
        </div>
        {/* render page index */}
        <div className="page-index">
          <ul>{renderPageIndex()}</ul>
        </div>
      </div>
    </div>
  );
}

export default UserManage;
