import React from "react";
import "./Menu.css";
import logo from "../../asset/etri_logo.png";

const Menu = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-color">
          <div className="nav-red"></div>
          <div className="nav-blue"></div>
        </div>
        <div className="nav-content">
          <img src={logo} alt="?" className="logo"></img>
          <div className="nav-title">
            자율주행 셔틀 서비스 모니터링 (연구단지)
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
