import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#111111]  mt-3">
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
        </div>
        <div className="flex gap-3 items-center text-white">
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

          <FaXTwitter size={25} className="hover:text-black" />
        </div>
      </section>
      <h1 className="text-center text-white text-base font-normal pb-5">
        All content is copyright &copy; 2024 Bajrang Bagri Photography
      </h1>
    </section>
  );
};

export default Footer;
