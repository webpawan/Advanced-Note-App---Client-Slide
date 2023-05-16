import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserAuth from "./pages/Auth/UserAuth";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
