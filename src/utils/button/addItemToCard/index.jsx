import React from "react";
import { Button } from "@material-ui/core";

const styleBtn = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  paddingLeft: 30,
  paddingRight: 30,
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export default function AddItemToCard() {
  return (
    <div className="btn-add-to-card d-flex align-items-center">
      <Button style={styleBtn}>Add To Cart</Button>
    </div>
  );
}
