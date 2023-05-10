import React from 'react';
import{useState,useEffect} from "react";
// import { Link } from 'react-router-dom';
// const [editInp, setEditInp] = useState("");
function DisplayContacts(props) {
    const [state,setState]=useState([])
    
    useEffect(()=>{
    
      
        click()
        // setPegi(pegi)
    
     },[])
    const click=()=>{
        fetch(`http://localhost:3002/contacts`)
        .then((res)=>res.json())
        .then((data)=>{
         
            console.log(data)
           setState(data)
           
        })
    }
        const delTask = async (e) => {
            await fetch(`http://localhost:3002/contacts/${e.id}`, {
              method: "DELETE",
            });
            // setState();
             click()
          };
     
     
     
     
    return (
        <div>
       {state.length>0?
        
        <div>
          
            {
                state.map((e,i)=>{
                    return(
                        <div key={i}>
                         <h1 >{e.first }{e.last}</h1>
                          
                         <button onClick={()=>{delTask(e)}}>Delete</button>  
                         
                         </div>
                    )
                })
            }
            
            </div>:<p>
            No Contact Found Please add contact from Create Contact Buttom
        </p>
        }

            </div>
    );
}

export default DisplayContacts;