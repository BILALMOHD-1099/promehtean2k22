import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import Main_Event from '../../screens/Main_Event';

function Events() {
      let dept_id = window.location.href.split("/")[3].split(":")[1].split("#")[0];
console.log(dept_id)
const ref = useRef(null);
  return (
      <section id="speakers" className="wow fadeInUp" style={{marginTop:"20px"}}>
        <div className="container">
          <div className="section-header">
           {data.map((i) => (
            i.dept_id == dept_id &&(<h2>{i.dept_name} events</h2> )
                 
                ))}
            <p>Here are the events</p>
          </div>           
              <div className="row">
          {data.map((i) => (
            i.dept_id == dept_id && i.all_events.map((k) => (
                     <div className="col-lg-4 col-md-6">
                    <div className="speaker">
                      <img
                        src={k.event_poster}
                        alt="Speaker 6"
                        className="img-fluid"
                      />
                  <div className="details">
                      <section id="popup">
        <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" style={{display:"none"}}>
          Launch demo modal
        </button>
                      <Main_Event eid={k.event_id} poster={k.event_poster} name={k.event_name} />
 </section>
                        <h3>
                      <div onClick={() => {
                        ref.current.click()
                          }} style={{cursor:"pointer"}}>{k.event_name}</div>
                        </h3>
                        <p>View more</p>
                      </div>
                    </div>
                  </div>
                  ))
                 
                ))}
              </div>          
        </div>
      </section>
  )
}

export default Events
