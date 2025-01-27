import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Container from "./components/pages/Container";
import Home from "./components/pages/Home";
import LecturePage from "./components/pages/LecturePage";

function App() {
  return (
    <>
      {/* <Sidebar />
      <Main /> */}
      <BrowserRouter basename="/english-entertainment">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gemini" element={<Container />} />
          <Route path="/lecture" element={<LecturePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
