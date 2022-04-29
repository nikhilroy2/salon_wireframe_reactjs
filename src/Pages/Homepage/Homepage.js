import React from "react";
import "./Homepage.css";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}

export default Homepage;

const Section1 = () => {
  return (
    <section id="Section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 align-self-end">
            <div className="col_wrapper">
              <h2 className="section_title">We are guarantee 100%.</h2>
              <p className="para para_top">
                You can make a contract by click bellow Create a contract
                button.
              </p>
              <div className="btn_control d-flex align-items-center">
                <button className="btn btn-light">Create a contract</button>
                <button data-mdb-ripple-duration="0" className="watch_btn btn btn-muted shadow-0  text-white">
                  <span className="watch_box rounded-circle me-2">
                    <i className="fab fa-youtube    text-danger"></i>
                  </span>{" "}
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper">
              <img src={require("../../Static/img/we_are_img.png")} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section id="Section2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="col_wrapper">
              <img
                src={require("../../Static/img/contract_img.png")}
                alt="img"
              />
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="col_wrapper">
              <p className="para para_sm_c">Owner: 0x0983...098</p>
              <h2 className="section_title">Contract 1 for you.</h2>
              <ul className="list-unstyled contract_list">
                <li>Started date: 4/28/2022</li>
                <li>End date: 5/30/2030</li>
                <li>Total Staked: 3000 USDT</li>
                <li>Left Amount: 2000 USDT</li>
              </ul>

              <p className="para para_sm_c">
                You can withdraw only 30usdt per day.
              </p>

              <div className="btn_control mt-4">
                <button className="btn btn-light">Withdraw</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
