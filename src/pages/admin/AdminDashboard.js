import React from "react";
import Upload from "../../Components/Upload";
import { TbCloudUpload } from "react-icons/tb";
import { IoImage } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="h-screen  mx-auto overflow-hidden max-w-screen-xl font-custom flex flex-col sm:flex-row ">
      <ul className="w-96">
        <li>
          <NavLink
            to={"/dashboard/admin"}
            className="flex items-center gap-2 border-s-[3px]  bg-blue-50 px-4 py-3 text-blue-700"
          >
            <TbCloudUpload />

            <span className="text-sm font-medium"> Upload </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/dashboard/images"}
            className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
          >
            <IoImage />

            <span className="text-sm font-medium"> View Images </span>
          </NavLink>
        </li>
      </ul>

      <div className="w-full">
        <Upload />
      </div>
    </div>
  );
};

export default AdminDashboard;
