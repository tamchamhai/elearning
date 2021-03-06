import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export default function Registor() {
  return (
    <NavLink to="/signin" className="text-decoration-none">
      <Button variant="contained" style={style} className="ml-2 button mt-1">
        Sign In
      </Button>
    </NavLink>
  );
}
