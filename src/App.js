import React from "react";
import Sign from "./component/mainbar";
import TakeAway from "./component/offer";
import Toproduct from "./component/product";
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
     <Toproduct />
     <TakeAway />
    </div>
  );
}

export default App;
