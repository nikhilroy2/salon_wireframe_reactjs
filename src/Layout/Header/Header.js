import React from "react";
import './Header.css';
function Header(props) {
  return (
    <header id="Header">
      <nav>
        <a href="#">
          <img src={require("../../Static/img/logo.png")} alt="logo" />
        </a>

        <ul className="nav_list">
          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Contact Us</a>
          </li>

          <li>
            <button className="connect_btn">Connect</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
