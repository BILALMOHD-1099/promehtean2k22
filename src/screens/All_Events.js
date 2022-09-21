import React, { useEffect } from 'react'
import Navbar from "../components/Home/Navbar";
import { data } from "../data";
import Departments from "../components/Home/Departments";
// import "./All.css";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Objective from "../components/Home/Objective";
import Gallery from "../components/Home/Gallery";
import Sponsors from "../components/Home/Sponsors";
import Contact from "../components/Home/Contact";
import Footer_Top from "../components/Home/Footer_Top";
import Footer_Container from "../components/Home/Footer_Container";
import Rocket from "../components/Home/Rocket";
import Events from '../components/Events/Events';
import Main_navbar from '../components/Main_navbar';
function All_Events() {
  const scroll = () => {
  const section = document.querySelector( '#speakers' );
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
    console.log(localStorage.getItem("promethean_token"))
  useEffect(() => {
    scroll()
  })
  return (
    <>
      <Main_navbar page={'event'}/>
      {/* <Intro /> */}
      <main id="main">
        {/* <About /> */}
        <Events/>
        {/* <Objective />/
        <Gallery />
        <Sponsors />
        <Contact /> */}
      </main>
      <footer id="footer">
        <Footer_Top />
        <Footer_Container/>
      </footer>
      <Rocket />
      </>
  )
}

export default All_Events
