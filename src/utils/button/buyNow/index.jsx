import React from "react";
import { Button } from "@material-ui/core";

const styleBtn = {
  // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  background: "linear-gradient(90deg, #2cccff -4.45%, #22dfbf 104.12%)",
  border: 0,
  paddingLeft: 30,
  paddingRight: 30,
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export default function BuyNowBtn() {
  return (
    <div className="btn-add-to-card mx-2 d-flex align-items-center">
      <Button style={styleBtn}>Mua ngay</Button>
    </div>
  );
}
