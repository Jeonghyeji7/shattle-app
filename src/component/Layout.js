import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header
        hasCertification={props.hasCertification}
        setHasCertification={props.setHasCertification}
      />
      {props.children}
    </>
  );
};

export default Layout;
