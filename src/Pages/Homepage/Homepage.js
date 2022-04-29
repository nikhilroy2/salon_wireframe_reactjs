import React from "react";

function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
    </div>
  );
}

export default Homepage;

const Section1 = () => {
  return (
    <section id="Section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="col_wrapper">
              <h2 className="section_title">We are guarantee 100%.</h2>
              <p className="para para_top">
                You can make a contract by click bellow Create a contract
                button.
              </p>
              <div className="btn_control">
                <button>Create a contract</button>
                <button>Watch Video</button>
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
