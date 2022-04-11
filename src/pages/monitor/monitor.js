import "./monitor.css";
import map from "./../../asset/map.png";
import React from "react";
import Layout from "../../component/Layout";

function Monitor(props) {
  
  return (
    <Layout
      hasCertification={props.hasCertification}
      setHasCertification={props.setHasCertification}
    >
      <div className="monitor-container">
        <img src={map} alt="" />
      </div>
    </Layout>
  );
}

export default Monitor;
