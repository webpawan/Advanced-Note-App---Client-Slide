import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const UserAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    if (!email || !name || !password) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        theme: "dark",
      });
    }
    try {
      const { data } = await toast.promise(
        axios.post("/api/user/signup", {
          name,
          email,
          password,
        }),
        {
          pending: " please wait ",
          success: "user successfully signup",
          error: "something is wrong try again or refresh the page ",
        }
      );
      if (data) {
        const { password, ...userInfo } = data;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);

    }
    setName("");
    setEmail("");
    setPassword("");
  };
  const signin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        theme: "dark",
      });
    }

    try {
      const { data } = await toast.promise(axios.post("/api/user/signin", {
        email,
        password,
      }),  {
        pending: " please wait ",
        success: "user successfully signin",
        error: "try again",
      })
      if (data) {
        const { password, ...userInfo } = data;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/home");
      }
    } catch (error) {

      alert(error.response.data.message);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  const guest = async (e) => {
    e.preventDefault();
    

    try {
      const { data } = await toast.promise(axios.post("/api/user/signin", {
        email:"guest@User",
        password:"GuestUser12k3",
      }),  {
        pending: " please wait ",
        success: "your note updated",
        error: "try again",
      })
      if (data) {
        const { password, ...userInfo } = data;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/home");
      }
    } catch (error) {

      alert(error.response.data.message);
    }
    setName("");
    setEmail("");
    setPassword("");
  };


  if (auth) {
    return (
      <>
        <ToastContainer />
        <section className="">
          <div className="px-4 py-5 px-md-5 text-center text-lg-start">
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="my-5 display-3 fw-bold ls-tight p-5">
                    Advanced
                    <br />
                    <span className="text-primary">Note App</span>
                  </h1>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">
                      <form onSubmit={signup}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1"
                              >
                                name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>

                        <div className="d-flex">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                          >
                            Sign up
                          </button>{" "}
                        
                        </div>
                        <hr />
                      </form>
<div className="flex justify-content-center">
<button
                          className="btn btn-success btn-block mb-4 mx-2"
                          onClick={guest}
                           data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="if you use guest account anyone can see your notes"
                        >
                          public account (Guest User)
                        </button>
</div>
                      <div className="text-center">






            
                        <p>have you already account ? please Login </p>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-floating mx-1 "
                          onClick={() => setAuth(false)}
                        >
                          login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <ToastContainer />
        <section className="d-flex justify-content-center align-items-center bg-dark vh-100">
          <div className=" text-center text-lg-start">
            <div className="">
              <div className=" mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={signin}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign in
                        </button>
                       
                      </div>
                      <hr />

                      <div className="text-center">
                        <p>if you dont have account please signup </p>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-floating mx-1 "
                          onClick={() => setAuth(true)}
                        >
                          signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default UserAuth;
