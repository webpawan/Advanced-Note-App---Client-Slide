import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/noteSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [user, setUser] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setSearch(searchResult));
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    const { email, ...Info } = userInfo;
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  const logout = () =>{
    console.log("hy");
    localStorage.clear();
    navigate("/");

  }

  return (
    <>
      <motion.header
        className=""
        initial={{ opacity: 0, y: "-10vw" }}
        animate={{ opacity: 1, y: "0vh" }}
        transition={{ bounce: 0.25, type: "spring" }}
      >
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand img-fluid" href="#">
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
                  onChange={(e) => setSearchResult(e.target.value)}
                  value={searchResult}
                />
              </div>
            </div>
            <button className="btn btn-outline-danger" onClick={logout}>logout</button>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
