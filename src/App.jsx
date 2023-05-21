import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserAuth from "./pages/Auth/UserAuth";
import "react-toastify/dist/ReactToastify.css";

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
