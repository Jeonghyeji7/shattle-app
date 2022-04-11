import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import ModalDialog from "../../component/modal/ModalDialog";

const Login = ({ setHasCertification }) => {
  //입력받는 id,password
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //id, password에 값을 입력 안했을때 경고(?)창
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //form -> submit
  //변경!!!!
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (id === "" || password === "") {
      handleOpen();
    } else {
      const data = { userid: id, password: password };
      await axios
        .post("/api/user/login", data, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((response) => {
          console.log(response.data.result);
          if (response.data.result === true) {
            return (
              console.log("로그인성공"),
              setHasCertification(true),
              localStorage.setItem("authenticated", true)
            );
          }
        })
        .catch(
          (error) => console.log("로그인 실패"),
          setId(""),
          setPassword("")
        );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="login-container">
          <div className="login-box">
            <div className="login-title">
              <span>ETRI 자율주행 셔틀 서비스 모니터링</span>
            </div>
            <div className="login-body">
              <div className="login-input">
                <div className="id">
                  <div className="id-label">
                    <span>아이디</span>
                    <span>&nbsp;*</span>
                  </div>
                  <input
                    value={id}
                    name="id"
                    onChange={({ target: { value } }) => setId(value)}
                    type="text"
                    className="login-id"
                    placeholder=""
                  />
                </div>
                <div className="pw">
                  <div className="pw-label">
                    <span>비밀번호</span>
                    <span>&nbsp;*</span>
                  </div>
                  <input
                    value={password}
                    name="password"
                    onChange={({ target: { value } }) => setPassword(value)}
                    type="password"
                    className="login-pw"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="login-btn">
                <button className="login-btn-content" type="submit">
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ModalDialog
        //type={MODAL_TYPES.MODAL_TYPE_YESNO}
        open={open}
        onClose={handleClose}
        text="ID 또는 P/W를 입력해주세요."
      >
        <button onClick={handleClose}>확인</button>
      </ModalDialog>
    </>
  );
};

export default Login;
