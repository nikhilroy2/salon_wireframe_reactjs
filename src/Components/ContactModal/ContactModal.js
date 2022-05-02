import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./ContactModal.css";

function ContactModal(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const closeModal = () => {
    setTimeout(()=> {

      document.querySelector('.my_close_modal').click()

    }, 5000) // close after 5second
  };
  return (
    <div id="ContactModal">
      {/* Modal */}
      <div
        className="modal fade"
        id="contactModalView"
        tabIndex={-1}
        aria-labelledby="contactModalViewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body border-0">
              <div className="modal_form_wrapper">
                <form action="" method="post">
                  <div className="form-group">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Start Date"
                    />
                    <img
                      className="date_img"
                      src={require("../../Static/img/date_img.png")}
                      alt="img"
                    />
                  </div>

                  <div className="form-group">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      placeholderText="End Date"
                    />
                    <img
                      className="date_img"
                      src={require("../../Static/img/date_img.png")}
                      alt="img"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="recipient_address"
                      id="recipient_address"
                      placeholder="Recipient Address"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      name="total_number"
                      id="total_number"
                      placeholder="Total Amount"
                    />
                  </div>
                </form>
              </div>

              <div className="modal_table_wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Symbol</th>
                      <th scope="col">Name</th>
                      <th scope="col">Balance</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          style={{ height: "15px", marginRight: "11px" }}
                          className="d-inline-block"
                          src={require("../../Static/img/usdt_logo.png")}
                          alt="img"
                        />{" "}
                        USDT
                      </td>
                      <td>USDT</td>
                      <td>323</td>
                      <td>
                        <button className="btn_action">ADD</button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <img
                          style={{ height: "15px", marginRight: "11px" }}
                          className="d-inline-block"
                          src={require("../../Static/img/usdt_logo.png")}
                          alt="img"
                        />{" "}
                        BUSD
                      </td>
                      <td>BUSD</td>
                      <td>323</td>
                      <td>
                        <button className="btn_action">ADD</button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <img
                          style={{ height: "15px", marginRight: "11px" }}
                          className="d-inline-block"
                          src={require("../../Static/img/usdt_logo.png")}
                          alt="img"
                        />{" "}
                        USDT
                      </td>
                      <td>USDT</td>
                      <td>323</td>
                      <td>
                        <button className="btn_action">ADD</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => closeModal()}>
                {" "}
                Close after few second
              </button>
              <button className="btn my_close_modal d-none" data-mdb-dismiss="modal">
                Close by click11
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
