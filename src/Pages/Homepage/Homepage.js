import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./custom_swiper.css";

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// components

import ContactModal from "../../Components/ContactModal/ContactModal";
import ConnectModal from "../../Components/ConnectModal/ConnectModal";
// Homepage css
import "./Homepage.css";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>

      <ContactModal></ContactModal>
      <ConnectModal></ConnectModal>
      {/* modal component */}
    </div>
  );
}

export default Homepage;

const Section1 = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section id="Section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 align-self-end">
            <div className="col_wrapper">
              <h2 className="section_title">
                We are <br /> guarantee 100%.
              </h2>
              <p className="para para_top">
                You can make a contract by click bellow Create a contract
                button.
              </p>
              <div className="btn_control d-flex align-items-center">
                <button className="btn btn-light">Create a contract</button>
                <button
                  data-mdb-ripple-duration="0"
                  className="watch_btn btn btn-muted shadow-0  text-white"
                >
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
              <Swiper className="mySwiper" autoplay={{ delay: 3000 }}>
                <SwiperSlide>
                  <img
                    src={require("../../Static/img/we_are_img.png")}
                    alt="img"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../Static/img/we_are_img.png")}
                    alt="img"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../Static/img/we_are_img.png")}
                    alt="img"
                  />
                </SwiperSlide>
              </Swiper>
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

const Section3 = () => {
  return (
    <section id="Section3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="section_subtitle">SERVICES</h4>
            <h2 className="section_title">We Offer Best Services</h2>
          </div>
        </div>

        <div className="row gx-0 gy-3 mt-2">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="col_wrapper">
              <div className="custom_card text-center">
                <div className="card_head text-center">
                  <img
                    src={require("../../Static/img/satisfaction.png")}
                    alt="img"
                  />
                  <h4 className="section_subtitle text-white my-3">Hair cut</h4>
                </div>
                <div className="card_body">
                  <p className="card_para">
                    Engrossed listening. Park gate sell they west hard for the.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="col_wrapper">
              <div className="custom_card text-center">
                <div className="card_head text-center">
                  <img
                    src={require("../../Static/img/satisfaction.png")}
                    alt="img"
                  />
                  <h4 className="section_subtitle text-white my-3">Hair cut</h4>
                </div>
                <div className="card_body">
                  <p className="card_para">
                    Engrossed listening. Park gate sell they west hard for the.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="col_wrapper">
              <div className="custom_card text-center">
                <div className="card_head text-center">
                  <img
                    src={require("../../Static/img/satisfaction.png")}
                    alt="img"
                  />
                  <h4 className="section_subtitle text-white my-3">Hair cut</h4>
                </div>
                <div className="card_body">
                  <p className="card_para">
                    Engrossed listening. Park gate sell they west hard for the.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="col_wrapper">
              <div className="custom_card text-center">
                <div className="card_head text-center">
                  <img
                    src={require("../../Static/img/satisfaction.png")}
                    alt="img"
                  />
                  <h4 className="section_subtitle text-white my-3">Hair cut</h4>
                </div>
                <div className="card_body">
                  <p className="card_para">
                    Engrossed listening. Park gate sell they west hard for the.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section4 = () => {
  return (
    <section id="Section4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h2 className="section_title">About Us</h2>
            <div className="about_us_custom_pagination"></div>
          </div>
          <div className="col-md-7">
            <div className="swiper_wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".about_us_custom_pagination",
                  clickable: true,
                  renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + "</span>";
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  {" "}
                  <div className="about_contact_wrapper">
                    <img
                      className="satisfaction"
                      src={require("../../Static/img/satisfaction.png")}
                      alt="img"
                    />
                    <p className="para">
                      “I Found the ‘Shop Name’ about 5 years ago. My hairs was
                      fine,flat frizzed with split ends. He has transformed ny
                      hair through the products and cut into a vibrant ,
                      healthy-looking style that bridge compliments”
                    </p>

                    <div className="user_details">
                      <strong className="d-block">Mike taylor</strong>
                      <span>India</span>
                    </div>
                    <div className="after_details">
                      <strong className="d-block">Chris Thomas</strong>
                      <span>India</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="about_contact_wrapper">
                    <img
                      className="satisfaction"
                      src={require("../../Static/img/satisfaction.png")}
                      alt="img"
                    />
                    <p className="para">
                      “I Found the ‘Shop Name’ about 5 years ago. My hairs was
                      fine,flat frizzed with split ends. He has transformed ny
                      hair through the products and cut into a vibrant ,
                      healthy-looking style that bridge compliments”
                    </p>

                    <div className="user_details">
                      <strong className="d-block">Mike taylor</strong>
                      <span>India</span>
                    </div>
                    <div className="after_details">
                      <strong className="d-block">Chris Thomas</strong>
                      <span>India</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="about_contact_wrapper">
                    <img
                      className="satisfaction"
                      src={require("../../Static/img/satisfaction.png")}
                      alt="img"
                    />
                    <p className="para">
                      “I Found the ‘Shop Name’ about 5 years ago. My hairs was
                      fine,flat frizzed with split ends. He has transformed ny
                      hair through the products and cut into a vibrant ,
                      healthy-looking style that bridge compliments”
                    </p>

                    <div className="user_details">
                      <strong className="d-block">Mike taylor</strong>
                      <span>India</span>
                    </div>
                    <div className="after_details">
                      <strong className="d-block">Chris Thomas</strong>
                      <span>India</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section5 = () => {
  return (
    <section id="Section5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section_wrapper text-center">
              <button className="subscribe_btn">
                <img
                  src={require("../../Static/img/subscribe_btn.png")}
                  alt="img"
                />
              </button>
              <div className="row justify-content-center">
                <div className="col-11 col-md-10">
                  <div className="section_content">
                    <h4 className="section_subtitle">BOOK APPOINTMENT</h4>
                    <h2 className="section_title title_23">
                      Get 20% Discount off your Book
                    </h2>

                    <p className="para para_section">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Urna, tortor tempus. Urna, tortor tempus. Urna, tortor
                      tempus.Urna, tortor tempus.Urna, tortor tempus. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                      tortor tempus. Urna, tortor tempus. Urna, tortor
                      tempus.Urna, tortor tempus.Urna, tortor tempus
                    </p>

                    <div className="text-center">
                      <button className="btn btn-light shadow-0">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
