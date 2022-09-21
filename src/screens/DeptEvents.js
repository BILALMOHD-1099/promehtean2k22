import React from 'react'
import Events from '../components/Events/Events'
import Footer_Top from "../components/Home/Footer_Top";
import Footer_Container from "../components/Home/Footer_Container";
import Rocket from "../components/Home/Rocket";
import Departments from '../components/Home/Departments'
import Main_navbar from '../components/Main_navbar'

function DeptEvents() {
  return (
    <div>
          <Main_navbar page={"dept_event"} />
          <div style={{ marginTop: "25px" }}>
              
          <Departments/>
      </div>
       <footer id="footer">
        <Footer_Top />
        <Footer_Container/>
      </footer>
      <Rocket />
    </div>
  )
}

export default DeptEvents
