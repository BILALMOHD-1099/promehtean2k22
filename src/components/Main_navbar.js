import React from "react";
import { Link } from "react-router-dom";
// import logo from "./Logo_02 JPG.jpg"
function Main_navbar({ page }) {
  return (
    <>
      {page == "home" && (
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left" style={{ display: "flex" }}>
              {/* <img src={logo} alt="" style={{marginRight:"5px"}}/> */}
              <h1>
                <span>PROMETHEAN</span>
              </h1>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="#intro">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#speakers">Events</a>
                </li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li>
                  <Link to="/registered_event">Registered Events</Link>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li><Link to="/login">Login</Link>
                  
                </li>
                <div  onClick={() => {
                  localStorage.setItem("promethran_token", null)
                  console.log("slkdfn")
                }}>logout</div>
              </ul>
            </nav>
          </div>
        </header>
      )}

      { page == 'event' &&
 <header id="header" style={{backgroundColor:"rgba(6, 12, 34, 0.98)",height:"70px",padding:"15px 0px",transition: "all 0.5s",position:"" }}>
          <div className="container">
            <div id="logo" className="pull-left" style={{ display: "flex" }}>
              {/* <img src={logo} alt="" style={{marginRight:"5px"}}/> */}
              <h1>
                <span>PROMETHEAN</span>
              </h1>
            </div>
           
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="menu-active">
                  <a href="">Events</a>
                </li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li>
                  <Link to="/registered_event">Registered Events</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
          }
          {page=="registered_event"&&  <header id="header" style={{backgroundColor:"rgba(6, 12, 34, 0.98)",height:"70px",padding:"15px 0px",transition: "all 0.5s",position:"" }}>
    <div className="container" style={{padding:"0px"}}>

      <div id="logo" className="pull-left">
          <h1><span>PROMETHEAN</span></h1>
    
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
            <li ><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li> */}
          <li><Link to="/all_dept_events">Events</Link></li>
          {/* <li><a href="#gallery">Gallery</a></li> */}
          <li className="menu-active"><Link to="/registered_event">Registered Events</Link></li>
          {/* <li><a href="#contact">Contact</a></li> */}
          <li><Link to="/login">Login</Link></li>
         
        </ul>
      </nav>{/* <!-- #nav-menu-container -->*/}
    </div>
          </header>}
           {page=="dept_event"&&  <header id="header" style={{backgroundColor:"rgba(6, 12, 34, 0.98)",height:"70px",padding:"15px 0px",transition: "all 0.5s",position:"" }}>
    <div className="container" style={{padding:"0px"}}>

      <div id="logo" className="pull-left">
          <h1><span>PROMETHEAN</span></h1>
    
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
            <li ><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li> */}
          <li className="menu-active"><Link to="/all_dept_events">Events</Link></li>
          {/* <li><a href="#gallery">Gallery</a></li> */}
          <li ><Link to="/registered_event">Registered Events</Link></li>
          {/* <li><a href="#contact">Contact</a></li> */}
          <li><Link to="/login">Login</Link></li>
         
        </ul>
      </nav>{/* <!-- #nav-menu-container -->*/}
    </div>
  </header>}
    </>
  );
}
export default Main_navbar;
