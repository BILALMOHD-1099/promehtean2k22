import React, { useRef } from "react";
import Register from "../components/Events/Register";

function Main_Event({
  poster,
  date,
  time,
  type,
  std_cordinator,
  std_phno,
  faculty_cordinator,
  faculty_pnno,
  desc,name,eid
}) {
const ref2 = useRef(null);

  return (
    <div>
      
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
               {name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="card" style={{ width: "50rem" }}>
                  <img src={poster} />
                  <div className="card-body" style={{ color: "black" }}>
                    <p className="card-text" style={{ color: "black" }}>
                      {desc}
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>
                        Date&{date}; Time :{time}
                      </strong>{" "}
                      1133 444,fff
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>Type:</strong> {type}
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>Registration Details:</strong>vvv fff
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>Contact Details:</strong>
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>Student coordinater</strong>
                      Name: {std_cordinator}
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      Contact No: {std_phno}
                      <br />
                    </p>
                    <p style={{ color: "black" }}>
                      {" "}
                      <strong>Faculty coordinater</strong>
                      Name: {faculty_cordinator}
                      <br />
                    </p>
                    Contact No: {faculty_pnno}
                    <br />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={() => {
                  ref2.current.click()
                  }} className="btn btn-primary">
          Register
                </button>
                 <button ref={ref2} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong2" style={{display:"none"}}>
          Launch demo modal
        </button>
                <Register eid={eid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Event;
