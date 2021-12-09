import React from "react";
import cookie from "js-cookie";
import router from "next/router";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const logout = () => {
    cookie.remove("token");
    router.push("/");
  };
  return (
    <>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-gray-100
        "
      >
        <div
          className="w-full md:flex  md:w-auto items-center justify-items-center mx-auto"
          id="menu"
        >
          <ul
            className="
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li className="mx-4">
              <a
                className="px-5 py-2 block hover:border rounded-full hover:bg-blue-500 hover:text-white text-xl"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mx-4">
              <a
                className=" px-5 py-2 block hover:border rounded-full hover:bg-blue-500 hover:text-white text-xl"
                href="/template"
              >
                Create Portfolio
              </a>
            </li>
            <li className="mx-4">
              <a
                className=" px-5 py-2 block hover:border rounded-full hover:bg-blue-500 hover:text-white text-xl"
                href="/createdPortfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="mx-4">
              <a
                className=" px-5 py-2 block hover:border rounded-full hover:bg-blue-500 hover:text-white text-xl"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="mx-4">
              <a
                className="px-5 py-2 cursor-pointer block hover:border rounded-full hover:bg-blue-500 hover:text-white text-xl text-purple-500"
                onClick={() => logout()}
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
