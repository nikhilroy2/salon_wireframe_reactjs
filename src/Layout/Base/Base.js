import React from "react";
import "./Base.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Base(props) {
  return (
    <div id="Base">
      <div className="social_fixed_control">
        <ul className="list-unstyled">
          <li>
            <a href="#">
              <img
                src={require("../../Static/img/instragram.png")}
                alt="instragram"
              />
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src={require("../../Static/img/facebook.png")}
                alt="facebook"
              />
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src={require("../../Static/img/twitter.png")}
                alt="twitter"
              />
            </a>
          </li>
        </ul>
      </div>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Base;
