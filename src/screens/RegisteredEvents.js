import React, { useEffect, useState } from "react";
import FixedNavbar from "../components/Events/FixedNavbar";
import { Link } from "react-router-dom";
import { data } from "../data";
import Main_navbar from "../components/Main_navbar";
// import { data } from '../../data'

function RegisteredEvents() {
  const [event_ids, setevent_ids] = useState([]);
  
    const getids = async () => {
        const response = await fetch(
            `https://prometheanbackend.herokuapp.com/auth/fetchallevents`,
            {
                method: "GET",
                
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("promethean_token")
        },
    }
    );
    const json = await response.json();
    console.log(json)
    
    localStorage.getItem("promethean_token") != null && (
    setevent_ids(json)
       )
  };
 
    useEffect(() => {
    window.scrollTo(0, 0)
    getids()
  }, [])
  
  return (
    <>
      <Main_navbar page={"registered_event"} />{
        localStorage.getItem("promethean_token") != null
          &&
          <section
            id="speakers"
            className="wow fadeInUp"
            style={{ marginTop: "15px" }}
          >
            <div className="container">
              <div className="section-header" style={{ marginBottom: "25px" }}>
                <h2>Registered Events</h2>
                <p>Here are the events</p>
              </div>
              <div className="row">
                {event_ids.map((eventid) => (
                  data.map((i) => (
                    i.all_events.map((eventinfo) => (
                      eventinfo.event_id == eventid.event_id && <>
                        <div className="col-lg-4 col-md-6">
                          <div className="speaker">
                            <img
                              src={eventinfo.event_poster}
                              alt="Speaker 6"
                              className="img-fluid"
                            />
                            <div className="details">
                              <h3>{eventinfo.event_name}</h3>
                              <p>
                        
                                <Link to={`/main_event:${eventinfo.event_id}`}>
                                  <div>View More</div> <p> By {i.dept_name} Department</p>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))
                  ))
                ))}
              </div>
            </div>
        </section>}{
         localStorage.getItem("promethean_token") === null&&<div style={{marginTop:"90px"}}>please login</div> 
          }
    </>
  );
}

export default RegisteredEvents;
