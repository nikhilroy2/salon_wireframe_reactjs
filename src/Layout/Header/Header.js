import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <header id="Header">
      <nav>
        <a href="#">
          <img src={require("../../Static/img/logo.png")} alt="logo" />
        </a>

        <ul className="nav_list">
          <li>
            <a href="#Section4">About Us</a>
          </li>

          <li>
            <a
              href="#"
              data-mdb-toggle="modal"
              data-mdb-target="#contactModalView"
            >
              Contact Us
            </a>
          </li>

          <li>
            <button
              className="connect_btn"
              data-mdb-target="#connectModalView"
              data-mdb-toggle="modal"
            >
              Connect
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
