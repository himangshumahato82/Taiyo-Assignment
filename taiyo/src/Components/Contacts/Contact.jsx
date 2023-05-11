import React from 'react';
import { useState } from 'react';
import DisplayContacts from './DisplayContacts';
// import Status from './Status';
function Contact(props) {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [contact, SetContact] = useState(false)
    const [status, setStatus] = useState("active")

    const AddContact = () => {
        SetContact(true)
    }

    const handleSubmit = (e) => {
        setFirstname("");
        setLastname("");
        e.preventDefault();
        const obj = {
            first: firstname,
            last: lastname,
            completed: (status === "active"),

        }

        console.log(obj)
        fetch("http://localhost:3002/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)

        })
            .then((res) => res.json())
            .then((data) => {

                // setStatus(data)


            })

    }
    return (
        <div>
            <div style={{ height: "50px", backgroundColor: "rgb(11, 165, 204)", marginTop: "-20px" }}>
                <h1 style={{ textAlign: "center" }}>Contact Page</h1>
            </div>
            {
                contact === false ?

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button style={{ width: "100px", height: "40px", fontSize: "20px" }} onClick={AddContact}>Contact</button>


                        <div>
                            <DisplayContacts />
                        </div>
                    </div> :
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ margin: "auto", display: "block" }}>


                                <form onSubmit={handleSubmit} >
                                    <input type="text"
                                        value={firstname}
                                        placeholder="First Name"
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                    <br />

                                    <input type="text"
                                        value={lastname}
                                        placeholder="LastName"
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <h1>Status:</h1>
                                        <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
                                            <div>
                                                <input
                                                    type="radio"
                                                    value="active"
                                                    checked={status === "active"}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                Active
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="radio"
                                                    value="inactive"
                                                    checked={status === "inactive"}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                Inactive
                                            </div>
                                        </div>
                                    </div>

                                    <button type='submit'>Submit</button>

                                </form>




                            </div>

                        </div>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <button style={{ height: "40px", fontSize: "20px" }}>Save Contact</button>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Contact;
