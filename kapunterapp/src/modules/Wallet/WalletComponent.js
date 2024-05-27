import React from "react";
// import Deposit from "./Deposit/Deposit";
// import Withdraw from "./Withdraw/Withdraw";
import "./WalletComponent.css";

function WalletComponent() {
  return (
    <div className="Wallet-Component-Main-Container">
      {/* <Deposit />
      <Withdraw /> */}
      <div className="Wallet-Dep-Wal-With-Container">
        <div className="Wallet-Dep-Comp">
          <span>DEPOSIT</span>
          <img
            style={{ width: "30px", height: "41.89px" }}
            src="https://ss.manage90.com/go-punt/assetsv15/cbtfpunter/img/arrow-up.svg"
            alt="Up Arrow"
          ></img>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="41.89"
            fill="currentColor"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
            style={{fontSize:"20px" , border:"1px solid red"}}
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg> */}
        </div>
        <div className="Wallet-Bal-Comp">
          <img
            style={{ width: "82.5px", height: "71.74px", padding: "5px 0 0 0" }}
            src="https://ss.manage90.com/go-punt/assetsv15/cbtfpunter/img/logo_1.svg"
            alt="Logo"
          ></img>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{margin:"0px", fontSize:"10.5px", fontWeight:"300"}}>WALLET BALANCE</p>
            <div style={{display:"flex", alignItems:"flex-end",justifyContent:"center"}}>
            <img
              style={{
                width: "18px",
                height: "18.8px",
                margin: "6px 5px 0 0",
              }}
              src="https://ss.manage90.com/go-punt/assetsv15/cbtfpunter/img/coins-icon.png"
              alt="Coins Icon"
            ></img>
            <p style={{fontSize:"15px", margin:"0"}}>0</p>
            </div>
          </div>
        </div>
        <div className="Wallet-With-Comp">
          <span>WITHDRAW</span>
          <img
            style={{ width: "30px", height: "41.89px" }}
            src="https://ss.manage90.com/go-punt/assetsv15/cbtfpunter/img/arrow-down.svg"
            alt="Down Arrow"
          ></img>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="41.89"
            fill="currentColor"
            class="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
            style={{fontSize:"20px" , border:"1px solid red"}}
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
}

export default WalletComponent;
