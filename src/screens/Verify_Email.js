import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import "./login.css";
import av from "./login.jpg";

function Verify_Email() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://prombackend.herokuapp.com/verify/sendotp`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email}),
      }
    );
    const json = await response.json();

   if(json.sucess){
      localStorage.setItem("promethean_verify_token", true)
       navigate("/change_password")

    }
    else{
 
      alert(`ERROR : ${json.error}`)
    }
  };
  return (
    <>
      <Login_nav name={"Verify Email"} />

      <div className="login">
        <form className="loginbox" onSubmit={handlesubmit}>
          <h1 className="login-title">Welcome Back</h1>
          <p>Please Enter Your registered Email</p>
          <div className="login-inputcontainer">
            <div>
              <label className="inp-component" htmlFor="username">
                <input
                  placeholder="Email Address *"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Next
                  </button>
                    <div className="login-footer-desc">
            <p>
              Please Check Your Email And continue Using OTP
            </p>
          </div>
        </form>
        <div className="right-login">
          <img src={av} alt="" />
        </div>
      </div>
    </>
  );
}

export default Verify_Email;
