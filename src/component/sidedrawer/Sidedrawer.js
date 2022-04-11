import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalDialog from "../modal/ModalDialog";
import "./Sidedrawer.css";
import menu from "../../asset/menu.png";
//import { MODAL_TYPES } from "../modal/ModalDialog";

const Sidedrawer = ({setHasCertification}) => {

  //모달
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //모달 yes 클릭시 -> 로그아웃
  const handleClick = () => {
    setHasCertification(false);
    localStorage.removeItem("authenticated");
    handleClose();
  };

  //슬라이더 open/close
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = ()=> setSidebar(!sidebar)

  return (
    <>
      <div className="s-container">
        <div className="btn" onClick={showSidebar}>
          <img src={menu} alt="?"></img>
        </div>
        <div className={sidebar? "s-box active" : "s-box"}>
          <div className="s-wrapper">
            <div className="s-menu">
              <Link to="/admin/monitor" className="s-links">
                모니터링
              </Link>
            </div>
            <div className="s-menu">
              <Link to="/admin/statics" className="s-links">
                통계정보
              </Link>
            </div>
            <div className="s-menu">
              <div style={{ cursor: "pointer" }} onClick={handleOpen}>
                로그아웃
              </div>
              <ModalDialog
                //type={MODAL_TYPES.MODAL_TYPE_YESNO}
                open={open}
                onClose={handleClose}
                text="로그아웃 하시겠습니까?"
              >
                <button onClick={handleClick}>예</button>
                <button onClick={handleClose}>아니오</button>
              </ModalDialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidedrawer;
