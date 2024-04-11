import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Footer = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();

  return (
    <section className="bg-[#111111]  mt-3 font-custom text-sm">
      <section className=" flex items-center justify-between px-5 py-14 mt-5">
        <div className="flex flex-col md:flex-row gap-4 items-center  no-underline text-white">
          <NavLink to={"/"} className={"text-white no-underline"}>
            {" "}
            Home
          </NavLink>
          <NavLink to={"/about"} className={"text-white no-underline"}>
            {" "}
            About
          </NavLink>
          <NavLink to={"/"} className={"text-white no-underline"}>
            {" "}
            Portfolio
          </NavLink>
          <NavLink to={"/contact"} className={"text-white no-underline"}>
            {" "}
            Contact
          </NavLink>
          {auth.token ? (
            <>
              <NavLink
                to={"/dashboard/admin"}
                className={"text-white no-underline"}
              >
                {" "}
                Dashboard
              </NavLink>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-3 items-center text-white text-sm">
          <button
            onClick={() => navigate("/login")}
            className=" bg-white text-slate-800 font-semibold rounded-sm p-2 flex items-center"
          >
            <div className="sm:hidden">{auth?.token ? "Logout" : "Login"}</div>
            <div className="hidden sm:flex">
              {auth?.token ? "Logout" : "Login as admin"}
            </div>
          </button>
          <FaFacebook size={25} className="hover:text-blue-700" />
          <FaInstagram
            size={25}
            className="hover:text-pink-500"
            onClick={() =>
              navigate(
                window.open(
                  "https://www.instagram.com/bajrang_bagri_photography/"
                )
              )
            }
          />
        </div>
      </section>
      <h1 className="text-center text-white text-sm font-normal pb-5">
        All content is copyright &copy; 2024 Bajrang Bagri Photography
      </h1>
    </section>
  );
};

export default Footer;
