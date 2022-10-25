import React, { useEffect, useState } from "react";
import "./style.css";

import { BsSearch, BsCartFill, BsHeart, BsPerson } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import axios from "axios";
import { gql, useQuery } from "@apollo/client";

function NavigationBar() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios
        .post(
          "https://countries.trevorblades.com/",
          {
            query: `
        query {
          continents {
            name
          }
        }
      `,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          let result = response.data.data.continents;
          setNavData(result);
        });
    };
    getData();
  }, []);

  console.log(navData);
  const [navbar, setNavbar] = useState(false);
  const widthHeader = navbar ? "400px" : "500px";

  return (
    <nav className="w-full pb-3 bg-white text-violet-600 shadow-lg">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 ">
            {/* <Link to="./"> */}
            <img src="../logo192.png" className="w-20 h-20" alt="mekres logo" />
            <h2 className="text-2xl font-bold ml-10">Mekrez</h2>
            {/* </Link> */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <div className="pt-2 relative mx-auto  text-blue-600">
                  <input
                    style={{
                      width: `${widthHeader}`,
                    }}
                    className="border-2 text-blue-600  mr-8 h-10 px-5 pr-16 rounded-lg text-sm  focus:ring-blue-500"
                    type="search"
                    name="search"
                    placeholder="Search product"
                  />
                  <button type="submit" className="-ml-14 h-10 w-14 my-0 mr-0">
                    {/* search icon */}
                    <BsSearch />
                  </button>
                </div>
              </li>
              <li className="text-violet-600 hover:text-gray-700  ">
                {/* <NavLink activeClassName="active" to="/home"> */}
                <BsSearch />
                Home
                {/* </NavLink> */}
              </li>
              <li className="text-violet-600 hover:text-gray-700">
                {/* <NavLink activeClassName="active" to="/archive/category"> */}
                <BsCartFill />
                Cart
                {/* </NavLink> */}
              </li>
              <li className="text-violet-600 hover:text-gray-700">
                {/* <NavLink activeClassName="active" to="/about"> */}
                <BsHeart />
                Whishlist
                {/* </NavLink> */}
              </li>
              <li className="text-violet-600 hover:text-gray-700">
                {/* <NavLink activeClassName="active" to="/login"> */}
                <a href="/login">
                  <BsPerson />
                  Login
                </a>
                {/* </NavLink> */}
              </li>
              <li className="text-violet-600 hover:text-gray-700">
                {/* <NavLink activeClassName="active" to="/faq"> */}
                <FaGlobe />
                English
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Catagories nav */}

      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {navData.map((items, keys) => (
            <li
              className="text-gray-600 hover:text-black hover:bg-gray-200"
              key={keys}
            >
              {items.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
