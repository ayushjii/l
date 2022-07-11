import React from "react";
import Sign from "./component/mainbar";
import Info from "./component/Store";
import { Navbarmain } from "./Pages/NavbarMain";

function App() {
  return (
    <div className="App">

     <Navbarmain />
     <Sign />
     <Info />
    </div>
  );
}

export default App;
