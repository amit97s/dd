import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div style={{ zIndex: "100000" }}>
      <div className="md:hidden flex items-center justify-between px-3 py-4 vb  z-50">
        <div>
          <p className="font-custom font-medium ">Bajrang Bagri Photography</p>
        </div>
        <section
          className="md:hidden flex items-center text-lg cursor-pointer z-[10000]"
          onClick={toggleMenu}
        >
          {toggle ? <RiMenu3Line /> : <IoClose />}
        </section>
      </div>
      <main
        className={`mx-auto overflow-hidden max-w-screen-xl text-sm absolute top-0 left-0 md:relative flex flex-col md:flex-row items-center justify-between py-6 px-4 bg-white w-full shadow-md rounded-b-lg md:top-0  md:bg-white md:shadow-none md:rounded-b-none ${
          toggle ? "hidden md:flex" : "flex md:hidden"
        } `}
      >
        <section
          className={`flex flex-col md:flex-row items-center md:gap-10 uppercase`}
        >
          <NavLink
            to="/"
            className="no-underline text-black font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="no-underline text-black  font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            About
          </NavLink>
        </section>
        <section className="hidden md:flex">
          <div>
            <p className="font-custom " style={{ fontSize: "20px" }}>
              Bajrang Bagri Photography
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center md:gap-10 ">
          <div
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <NavLink
              className="no-underline text-black uppercase font-custom font-medium "
              to="#"
            >
              Portfolio
            </NavLink>
            {isMenuOpen && (
              <div className="fixed top-0 left-0 right-0 bg-white md:border md:border-gray-200 rounded-md md:shadow-md">
                <ul className="list-none no-underline flex flex-col gap-2 items-center justify-center p-4">
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
          </div>
          <NavLink
            to="/contact"
            className="no-underline text-black uppercase font-custom font-medium hover:underline underline-offset-8 duration-150"
          >
            Contact
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default Header;
