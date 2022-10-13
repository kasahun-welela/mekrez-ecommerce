import React from "react";
import "./style.css";
// import {B} "../../../bootrap-icon"
import { FaHeart, FaUser } from "react-icons/fa";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white   nav-c">
      <div className="container-fluid top-nav">
        <a className="navbar-brand" href="www.kwk.com">
          መቅረዝ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-center ">
            <li className="nav-item ">
              <form className="d-flex nav-search-box" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  style={{ marginLeft: -80 }}
                  className="btn btn-warning"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="www.kwk.com/limlbbb">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="www.kwk.com"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUser />
                Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="www.kwk.com">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="www.kwk.com">
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item  my-lg-0">
              <a className="nav-link ml-7" href="www.kwk.com/limlbbb">
                Link
              </a>
            </li>
          </ul>

          {/* this for try */}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
