import React from "react";
import bimg28 from "../subassets/bagris images/New folder/_AJU1284.jpg";

const Porteng = () => {
  return (
    <div className="Porteng mt-4">
      <div className="engagement">
        <div
          className="engagement-head"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <div className="engagement-background">
          <img
            src={bimg28}
            alt="bimg"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Porteng;
