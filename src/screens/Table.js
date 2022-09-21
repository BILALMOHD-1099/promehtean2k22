import React, { useEffect, useState } from 'react'

function Table() {
const [data,setdata]=useState()
    const getdata = async () => {
         const response = await fetch(
      `https://prometheanbackend.herokuapp.com/auth/fetchalleventswithid`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
          },
         body: JSON.stringify({event_id:"e1"}),
      }
    );
    const json = await response.json();
        console.log(json)
        setdata(json)
    }
    useEffect(() => {
      getdata()
      
    },[])
      
  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
        <table className="table table-image">
          <thead>
            <tr>
              {/* <th scope="col">Sno</th> */}
              <th scope="col">Name</th>
              <th scope="col">Mail id</th>
              <th scope="col">Phone number</th>
              <th scope="col">members</th>
              <th scope="col">Image</th>
              <th scope="col">Transcation id</th>
            </tr>
          </thead>
                      <tbody>{data!=null?
                          data.map((i) => (
                          <tr>
                                  {/* <th scope="row">{}</th> */}
              <td>
                {i.user_name}
              </td>
                                  <td>{i.user_email}</td>
                                  <td>{i.user_phno}</td>
              <td>aman1,aman2,aman3,aman4<br />
                </td>
                                  <td><img src={i.img} alt="" /></td>
                                  <td>{i.trans_id}</td>
            </tr>
                      )):<>loading...</>}
            
            {/* <tr>
              <th scope="row">1</th>
              <td className="w-25">
                aman khan
              </td>
              <td>amm@xyxx</td>
              <td>xxxxxxxxx</td>
              <td>aman1<br />
                aman2</td>
              <td><a href="#">view</a></td>
              <td> xmxxxx</td>
            </tr> */}
          </tbody>
        </table>   
      </div>
    </div>
  </div>
  )
}

export default Table