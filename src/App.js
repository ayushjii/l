import React from "react";
import Choose from "./component/Choose";
import SpiceRoll from "./component/Corousel";
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
     <SpiceRoll />
     <Choose />
    </div>
  );
}

export default App;
