import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function SpinnerLoading() {
  let [color, setColor] = useState("#ffffff");
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <ClipLoader color={color} loading={loading} css={override} size={50} />
    </div>
  );
}

export default SpinnerLoading;
