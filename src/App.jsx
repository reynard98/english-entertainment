import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Container from "./components/pages/Container";
import Nav from "./components/Navigation/Nav";
import Card from "./components/Card/Card";
import Card2 from "./components/Card2/Card2";
import Home from "./components/pages/Home";
import Video from "./components/Lecture/Accordion";
import Accordion from "./components/Lecture/Accordion";
import LecturePage from "./components/pages/LecturePage";

function App() {
  return (
    <>
      {/* <Sidebar />
      <Main /> */}
      <BrowserRouter>
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
