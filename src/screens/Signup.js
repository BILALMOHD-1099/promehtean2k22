import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import "./login.css";
import av from "./login.jpg";
function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [branch, setBranch] = useState("");
  // const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

useEffect(()=>{
window.scroll(0,0)},[])

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://prombackend.herokuapp.com/auth/signup`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,name,password,phno,college,branch }),
      }
    );
    const json = await response.json();

    if (json.sucess) {
      console.log(json.authtoken)
      localStorage.setItem("promethean_auth_token", json.authtoken)
       navigate("/")

    }
    else{
 
      alert(`ERROR : ${json.errors}`)
    }
  };
  return (
    <>
          <Login_nav name={"Signup"} />

      <div className="login">
        <form className="loginbox" onSubmit={handlesubmit}>
          <h1 className="login-title">Student Sign Up</h1>
          <p>sub-title text goes here</p>
          <div className="login-inputcontainer">
            <div>
              <label className="inp-component">
                <input
                  placeholder="Email Address *"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Name *"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Phone Number *"
                  onChange={(e) => setPhno(e.target.value)}
                  value={phno}
                  className="login-input"
                  type="text"
                />
              </label>
                      </div>
                         <div>
              <label className="inp-component">
                <input
                  placeholder="College Name *"
                  onChange={(e) => setCollege(e.target.value)}
                  value={college}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Branch *"
                  onChange={(e) => setBranch(e.target.value)}
                  value={branch}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
         
            <div>
              <label className="inp-component">
                <input
                  placeholder="Password *"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="login-input"
                  type="password"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Confirm Password *"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  value={confirmpassword}
                  className="login-input"
                  type="password"
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Signup
          </button>
          <div className="login-footer-desc">
            <p>
              Already Have An Account <Link to={"/login"}>Login</Link>
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

export default Signup;