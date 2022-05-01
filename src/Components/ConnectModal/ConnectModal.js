import React from "react";
import "./ConnectModal.css";

function ConnectModal(props) {
  return (
    <div id="ConnectModal">
      <div
        className="modal fade"
        id="connectModalView"
        tabIndex={-1}
        aria-labelledby="connectModalView"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body border-0 py-5">
              <div className="row justify-content-center gy-5">
                <div className="col-5 text-center">
                  <button className="connect_btn">
                    <img
                      src={require("../../Static/img/metamaskWallet.png")}
                      alt="img"
                    />
                  </button>
                </div>

                <div className="col-5 text-center">
                  <button className="connect_btn">
                    <img
                      src={require("../../Static/img/TrustWallet.png")}
                      alt="img"
                    />
                  </button>
                </div>

                <div className="col-5 text-center">
                  <button className="connect_btn">
                    <img
                      src={require("../../Static/img/MathWallet.png")}
                      alt="img"
                    />
                  </button>
                </div>

                <div className="col-5 text-center">
                  <button className="connect_btn">
                    <img src={require("../../Static/img/Coin.png")} alt="img" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectModal;
