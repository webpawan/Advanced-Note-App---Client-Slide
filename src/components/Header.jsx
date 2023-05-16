import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    const { email, ...Info } = userInfo;
    // dispatch(setUser());
    if (!userInfo) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <motion.header
        className="header"
        initial={{ opacity: 0, y: "-10vw" }}
        animate={{ opacity: 1, y: "0vh" }}
        transition={{ bounce: 0.25, type: "spring" }}
      >
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand img-fluid" href="/">
              <div className="box">{user?.email}</div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <div className="mx-auto">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search in small letter "
                />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      <ToastContainer />
    </>
  );
};

export default Header;
