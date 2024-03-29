import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import signature from "../assets/signature.png";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
    // setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="md:hidden flex items-center justify-between px-3 py-4 z-10 ">
        <div>
          <p className="font-custom font-medium ">Bajrang Bagri Photography</p>
        </div>
        <section
          className="md:hidden flex items-center text-lg cursor-pointer z-[1000]"
          onClick={toggleMenu}
        >
          {toggle ? <RiMenu3Line /> : <IoClose />}
        </section>
      </div>
      <main
        className={`mx-auto overflow-hidden max-w-screen-xl text-sm   z-10 absolute top-0 left-0 md:relative flex flex-col md:flex-row items-center justify-between py-6 px-4 bg-white w-full  shadow-md rounded-b-lg md:top-0  md:bg-white md:shadow-none md:rounded-b-none ${
          toggle ? "hidden" : ""
        } `}
      >
        <section
          className={`flex flex-col md:flex-row items-center  md:gap-10 uppercase `}
        >
          <NavLink
            to="/"
            className="no-underline text-black font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="no-underline text-black font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            About
          </NavLink>
        </section>
        <section className="hidden md:flex">
          <div>
            <p className="font-custom " style={{ fontSize: "23px" }}>
              Bajrang Bagri Photography
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center  md:gap-10 ">
          <NavLink
            className="relative group no-underline text-black uppercase font-custom font-medium "
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            Portfolio
            {isMenuOpen && (
              <div className="absolute top-6 -left-10  bg-white border border-gray-200 rounded-md  shadow-md z-[999] h-32">
                <ul className="list-none no-underline flex flex-col gap-2  items-center justify-center p-4 h-fit w-fit">
                  <li>
                    <NavLink
                      to="/wedding"
                      className="no-underline text-black uppercase font-custom font-medium hover:underline underline-offset-8 duration-150"
                    >
                      Weddings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/engagements"
                      className="no-underline text-black uppercase font-custom font-medium hover:underline underline-offset-8 duration-150"
                    >
                      Engagements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/freelance"
                      className="no-underline text-black uppercase font-custom font-medium hover:underline underline-offset-8 duration-150"
                    >
                      Pre wedding
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            className="no-underline text-black uppercase font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            Contact
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default Header;
