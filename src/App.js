import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import All_Events from "./screens/All_Events";
import Change_password from "./screens/Change_password";
import Cologin from "./screens/Cologin";
import Cosignup from "./screens/Cosignup";
import DeptEvents from "./screens/DeptEvents";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Main_Event from "./screens/Main_Event";
import RegisteredEvents from "./screens/RegisteredEvents";
// import RegisteredEvents from "./screens/RegisteredEvents";
import Signup from "./screens/Signup";
import Table from "./screens/Table";
import Verify_Email from "./screens/Verify_Email";
 
function App() {
  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />   
          <Route path="/events:id" element={<All_Events/>} />
          <Route path="/main_event:id" element={<Main_Event />} />
          <Route path="/login" element={<Login/>} />   
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/cosignup" element={<Cosignup/>} />  
          <Route path="/cologin" element={<Cologin/>} />  
          <Route path="/all_dept_events" element={<DeptEvents/>} />   
          <Route path="/verify_email" element={<Verify_Email/>} />   
          <Route path="/change_password" element={<Change_password/>} />   
          <Route path="/get_data" element={<Table/>} />   
          <Route path="/registered_event" element={<RegisteredEvents/>} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App