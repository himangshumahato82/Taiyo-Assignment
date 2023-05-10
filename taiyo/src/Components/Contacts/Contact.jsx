import React from 'react';
import { useState } from 'react';
function Contact(props) {
  
    const[contact,SetContact]=useState(false)
     const AddContact=()=>{
        SetContact(true)
     }
    return (
        <div>
        <div style={{height:"50px",backgroundColor:"rgb(11, 165, 204)",marginTop:"-20px"}}>
        <h1 style={{textAlign:"center"}}>Contact Page</h1>
        </div>
        {
            contact===false?
        
            <div style={{textAlign:"center",marginTop:"20px"}}>
                <button style={{width:"100px",height:"40px",fontSize:"20px"}} onClick={AddContact}>Contact</button> 
                <div>
                   <p>
                   No Contact Found Please add contact from Create Contact Buttom
                   </p>
                </div>
            </div>:
            <div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <div style={{margin:"auto",display:"block"}}>
                 <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h2>First Name :</h2>
                <input type="text" style={{height:"40px",marginTop:"15px",marginLeft:"10px"}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h2>Last Name :</h2>
                <input type="text" style={{height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
              </div>



              <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h1>Status:</h1>
               
               <div style={{marginTop:"20px",fontSize:"20px",fontWeight:"bold"}}>
              <div>
                <input
                  type="radio"
                />
                Active
              </div>
              <div className="col-2">
                <input
                  type="radio"
                />
                Inactive
              </div>
              </div>
               </div>

            </div>
           
          </div>
          <div style={{textAlign:"center",marginTop:"20px"}}>
          <button style={{height:"40px",fontSize:"20px"}}>Save Contact</button> 
            </div>
          </div>
        }
        </div>
    );
}

export default Contact;