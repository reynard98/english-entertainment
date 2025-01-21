import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./Container.css";
const Container = () => {
  return (
    <div className="wrap">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Container;
