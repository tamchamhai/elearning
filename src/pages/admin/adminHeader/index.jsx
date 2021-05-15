import React, { useState } from "react";
import "./style.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAdminLogout } from "../../../store/actions/admin.action";

function AdminHeader({ setToggleVar }) {
  const dispatch = useDispatch();
  const adminSignin = JSON.parse(localStorage.getItem("adminSignin"));
  const [val, setVal] = useState(false);

  // Handle function
  const handleLogout = () => {
    localStorage.removeItem("adminSignin");
    dispatch(postAdminLogout("signin"));
  };

  return (
    <div className="cover-admin-header">
      {/* left */}
      <div className="left">
        {/* toggle button */}
        <div className="toggle-btn">
          <button
            onClick={() => {
              setVal(!val);
              setToggleVar(val);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        {/* Custom logo */}
        <NavLink className="logo" to="/admin/dashboard">
          <span className="logo-part-one">E</span>
          <span className="logo-part-two">Learn</span>
        </NavLink>
      </div>
      {/* right */}
      <div className="right">
        <div className="username">
          <p>Hello! {adminSignin?.hoTen}</p>
        </div>
        <div className="avatar">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Bear&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Default&skinColor=Tanned"
            alt="avatar"
          />
        </div>
        <div className="logout-btn">
          <button onClick={handleLogout}>
            <ExitToAppIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
