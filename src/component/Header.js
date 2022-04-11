import React from "react";
import Menu from "./menu/Menu";
import Sidedrawer from "./sidedrawer/Sidedrawer";

const Header = (props) => {
  return (
    <>
      {props.hasCertification ? (
        <Sidedrawer setHasCertification={props.setHasCertification} />
      ) : null}
      <Menu />
    </>
  );
};

export default Header;
