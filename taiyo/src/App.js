import React from "react";

import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import Map from "./Components/Maps/Map";
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}> Taiyo.AI Assignment</h1>
      <Routes>
      <Route path="/" element={<Home />}>
      <Route path="map" element={<Map/>} />
      <Route path="contact" element={<Contact/>} />
       
       </Route>
      </Routes>
    </div>
  );
}

export default App;
