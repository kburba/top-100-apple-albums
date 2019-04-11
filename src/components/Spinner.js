import React from "react";
import Spinner from "../spinner.svg";

export default () => {
  return (
    <div>
      <img
        src={Spinner}
        alt="Loading..."
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </div>
  );
};
