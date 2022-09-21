import React, { useState } from "react";
import "./event.css";
import FileBase64 from 'react-file-base64'
import { useNavigate } from "react-router-dom";

function Register({eid}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [t_id, sett_id] = useState("");
  const [img, setimg] = useState("");

  const navigate=useNavigate()
    
    const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://prometheanbackend.herokuapp.com/auth/addevent`,
      {
        method: "POST",

          headers: {
            "auth-token": localStorage.getItem("promethean_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_email:email,user_name:name,user_phno:phno,trans_id:t_id,img,event_id:eid }),
      }
    );
    const json = await response.json();
      if (json == undefined) {
  alert("wklnf")
}
    if (json.sucess) {
    //   console.log(json.authtoken)
        alert("done")
    //   localStorage.setItem("promethean_token", json.authtoken)
       navigate("/")

    }
    else{
 
      alert(`ERROR : ${json.errors}`)
    }
  };
    
    
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ backgroundColor: "gray" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Register
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
              <div className="row register_inputs">
                <input
                  className="register_event_inp"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="register_event_inp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  type="text"
                />
                <input
                  className="register_event_inp"
                  onChange={(e) => setPhno(e.target.value)}
                  value={phno}
                  placeholder="phno"
                  type="text"
                />
                <input
                  className="register_event_inp"
                  onChange={(e) => sett_id(e.target.value)}
                  value={t_id}
                  placeholder="Transaction id"
                  type="text"
                />
                             
                <FileBase64 required={true} multiple={false} onDone={(e) => {
                  setimg(e.base64)
                }} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#exampleModalLong"
                                  className="btn btn-primary"
                                  onClick={handlesubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
