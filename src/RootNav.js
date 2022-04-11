import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Monitor from "./pages/monitor/monitor";
import Statics from "./pages/statics/Statistics";
import LoginForm from "./pages/loginform/LoginForm";


const RootNav = () => {
  const [hasCertification, setHasCertification] = useState(null);
  console.log(hasCertification)

  const renderNav = useCallback(() => {
    if (hasCertification) {
      return (
        <>
          <Route exact path="/admin/*" element={<Navigate to="/admin/monitor" />} />
          <Route exact path="/loginForm" element={<Navigate to="/admin/monitor" />} />
          <Route path="/admin/monitor" element={<Monitor hasCertification={hasCertification} setHasCertification={setHasCertification}/>} />
          <Route path="/admin/statics" element={<Statics hasCertification={hasCertification} setHasCertification={setHasCertification}/>} />
        </>
      );
    }
    return (<>
      <Route exact path="/admin/*" element={<Navigate to="/loginForm" />} />
      <Route path="/loginForm" element={<LoginForm setHasCertification={setHasCertification}/>} /></>
    );
  }, [hasCertification]);

  useEffect(() => {
    if (hasCertification === null) {
      const temp = JSON.parse(localStorage.getItem("authenticated"));
      if (temp) {
        setHasCertification(temp);
      }
    }
  }, [hasCertification]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/monitor" />} />
        <Route path="/monitor" element={<Monitor hasCertification={hasCertification}/>} />
        {renderNav()}
      </Routes>
    </Router>
  );
};

export default RootNav;
