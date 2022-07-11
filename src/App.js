import React from "react";
import Sign from "./component/mainbar";
import Special from "./component/special";
import Info from "./component/Store";
import { Navbarmain } from "./Pages/NavbarMain";

function App() {
  return (
    <div className="App">

     <Navbarmain />
     <Sign />
     <Info />
     <Special />
    </div>
  );
}

export default App;
