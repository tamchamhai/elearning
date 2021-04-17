import { Button } from "@material-ui/core";
import React from "react";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export default function SaleEmail() {
  return (
    <div>
      <Button variant="contained" style={style} className=" w-100 button mt-1">
        Đăng kí
      </Button>
    </div>
  );
}
