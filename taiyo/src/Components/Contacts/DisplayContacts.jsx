import React from "react";
import ok from "../assets/ok.png";
import notok from "../assets/notok.png";
import garbage from "../assets/garbage.png";
import edit from "../assets/pencil.png";
import { useState, useEffect } from "react";
import "./Display.css";
import { productAction, todoAction } from "../Redux/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// const [editInp, setEditInp] = useState("");
function DisplayContacts(props) {
  const [state, setState] = useState([]);
  const [showEdit, setShowEdit] = useState({
    status: false,
    id: 0,
  });
  const [editInp1, setEditInp1] = useState();
  const [editInp2, setEditInp2] = useState();
  useEffect(() => {
    click();
    // setPegi(pegi)
  }, []);
  const dispatch = useDispatch();
  const click = () => {
    fetch(`https://taiyo-server-production.up.railway.app/contacts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
        todoAction(data, dispatch);
      });
  };
  const reduxTodos = useSelector((todo) => {
    return todo.todoData;
  });
  console.log(reduxTodos);
  const delTask = async (e) => {
    await fetch(
      `https://taiyo-server-production.up.railway.app/contacts/${e.id}`,
      {
        method: "DELETE",
      }
    );
    // setState();
    click();
  };

  const changeStatus = async (e) => {
    console.log(e);
    const newTask = { completed: e.completed ? false : true };
    await fetch(
      `https://taiyo-server-production.up.railway.app/contacts/${e.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

    await fetch(
      `https://taiyo-server-production.up.railway.app/contacts/${showEdit.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(editedTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    click();
    setShowEdit({
      status: false,
      id: 0,
    });
  };

  return (
    <div>
      {reduxTodos.length > 0 ? (
        <div>
          <div>
            <form
              onSubmit={editTask}
              style={{ display: showEdit.status ? "flex" : "none" }}
            >
              <label htmlFor="">FirstName:</label>
              <input
                type="text"
                value={editInp1}
                required
                placeholder="First Name"
                onChange={(e) => {
                  setEditInp1(e.target.value);
                }}
              />
              <br />
              <label htmlFor="">LastName:</label>
              <input
                type="text"
                value={editInp2}
                required
                placeholder="LastName"
                onChange={(e) => {
                  setEditInp2(e.target.value);
                }}
              />
              <br />
              <button type="submit">Save Contact</button>
            </form>
          </div>

          <div
            
                className="map-contacts" >
            {state.map((e) => {
              console.log(e);
              return (
                <div className="taskItem" key={e.id}>
                  <div className="itembegain">
                    <div>
                      {e.first} {e.last}
                    </div>
                  </div>
                  <div className="itemends">
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
                    <img
                      src={edit}
                      alt=""
                      onClick={() => {
                        setShowEdit({
                          status: true,
                          id: e.id,
                        });
                        setEditInp1(e.first);
                        setEditInp2(e.last);
                      }}
                    />
                    <img src={garbage} alt="" onClick={() => delTask(e)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="contact-empty">
        <h1>No Contact Found Please add contact from Create Contact Button</h1>
        </div>
      )}
    </div>
  );
}

export default DisplayContacts;
