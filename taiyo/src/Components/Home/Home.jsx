import React from 'react';
import "./Home.css";
import {Link,Outlet} from "react-router-dom";
function Home(props) {
var links=[
    {
     path:"contact",
     title:"Contact",   
    },
    {
        path:"map",
        title:"Map",  

    },
];

    return (
        <div className="categoryContainer">
        <div className="linkContainer">
          {links.map((link, index) => (
            <Link to={link.path}>{link.title}</Link>
          ))}
        </div>
  
        <div>
          <Outlet />
        </div>
      </div>
    );
}

export default Home;