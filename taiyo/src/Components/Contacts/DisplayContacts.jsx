import React from 'react';
import ok from "../assets/ok.png";
import notok from "../assets/notok.png"
 import garbage from "../assets/garbage.png";
import edit from "../assets/pencil.png"
import{useState,useEffect} from "react";
import "./Display.css"
// import { Link } from 'react-router-dom';
// const [editInp, setEditInp] = useState("");
function DisplayContacts(props) {
    const [state,setState]=useState([])
    const [showEdit, setShowEdit] = useState({
      status: false,
      id: 0,
    });
    const [editInp1, setEditInp1] = useState();
    const [editInp2, setEditInp2] = useState();
    
    
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

          const changeStatus = async (e) => {
            console.log(e);
            const newTask = { completed: e.completed ? false : true };
            await fetch(`http://localhost:3002/contacts/${e.id}`, {
              method: "PATCH",
              body: JSON.stringify(newTask),
              headers: {
                "Content-Type": "application/json",
              },
            });
            click();
          };
         
          const editTask = async (event) => {
            event.preventDefault();
            // console.log(editInp);
           
              
              const editedTodo = {
                first: editInp1,
                last: editInp2,
              };
              //  console.log(editInp)
            
            
            await fetch(`http://localhost:3002/contacts/${showEdit.id}`, {
              method: "PATCH",
              body: JSON.stringify(editedTodo),
              headers: {
                "Content-Type": "application/json",
              },
            });
            click();
            setShowEdit({
              status: false,
              id: 0,
            });
          };
     
     
    return (
        <div>
       {state.length>0?
        
        <div>
                        <div >
                          
                         
                        <form onSubmit={editTask} 
                        style={{ display: showEdit.status ? "flex" : "none" }}>
                            <input type="text"
                              value={editInp1}
                              required
                              placeholder="First Name"
                              onChange={(e) => {
                                setEditInp1( e.target.value );
                              }}
                            />
                             <br />
                        
                            <input type="text"
                              value={editInp2}
                              required
                              placeholder="LastName"
                              onChange={(e) => {
                                setEditInp2(e.target.value );
                              }}
                            />
                            <br/>
                            <button type='submit'>Edit</button>
                            </form>
                         </div>
                    
                
                 
                {state.map((e) => {
                  console.log(e);
                  return (
                    <div className="taskItem" key={e.id}>
                      <div className="itembegain">
                        <img
                          src={ok}
                          style={{ display: e.completed ? "flex" : "none" }}
                          alt=""
                          onClick={() => changeStatus(e)}
                        />
                        <img
                          src={notok}
                          style={{ display: !e.completed ? "flex" : "none" }}
                          alt=""
                          onClick={() => changeStatus(e)}
                        />
                        <div>{e.first}{e.last}</div>
                      </div>
                      <div className="itemends">
                        <img
                          src={edit}
                          alt=""
                          onClick={() => {
                            setShowEdit({
                              status: true,
                              id: e.id,
                            });
                            setEditInp1(e.first)
                            setEditInp2(e.last)
                              
              
                          }}
                        />
                        <img src={garbage} alt="" onClick={() => delTask(e)} />
                      </div>
                    </div>
                  );
                })}
                
            
            
            </div>:<p>
            No Contact Found Please add contact from Create Contact Buttom
        </p>
        }

            </div>
    );
}

export default DisplayContacts;