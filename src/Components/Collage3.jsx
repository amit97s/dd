import React from "react";
  import Bacakgr from "../subassets/bagris images/New folder/_AJU0756.jpg";
import assetimg from "../subassets/bagris images/New folder/_AJU0440.jpg";
import assetimg2 from "../subassets/bagris images/New folder/_AJU0115.jpg";
import assetimg3 from "../subassets/bagris images/New folder/_AJU0207.jpg"
import assetimg4 from "../subassets/bagris images/New folder/_AJU0240-2.jpg"
import assetimg5 from "../subassets/bagris images/New folder/_AJU0440.jpg";
import assetimg6 from "../subassets/bagris images/New folder/_AJU1479.jpg";
import assetimg7 from "../subassets/bagris images/New folder/_AJU1574.jpg";
import assetimg8 from "../subassets/bagris images/New folder/_AJU1479.jpg";
function Collage3() {
  const imagesmapp = [
    {
      colImages: assetimg,
    },
    {
      colImages: assetimg2,
    },
    {
      colImages: assetimg3,
    },
    {
      colImages: assetimg4,
    },
    {
      colImages: assetimg5,
    },
    {
      colImages: assetimg6,
    },
    {
      colImages: assetimg7,
    },
    {
      colImages: assetimg8,
    },
  ];
  return (
    <div className="m-auto">
      <div className="w-[1200px] h-[600px] border border-red-800 m-auto mt-4">
        <img src={Bacakgr} alt="" className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="w-full h-10 text-blue-500 text-center mt-10">
        {" "}
        my stories
      </div>
      <div className="text-center m-10">amit & aakansha</div>

      <div className="m-auto flex flex-wrap w-[800px] gap-3  border border-red-950">
        {imagesmapp.map((colimg, index) => {
          return (
            <div
              className="w-[47%] h-[300px] ml-3 border border-red-950 hover:opacity-85"
              key={index}
            >
              <img
                src={colimg.colImages}
                alt={"img"}
                className=" w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collage3;
