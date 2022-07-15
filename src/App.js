import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Products from './Pages/Products';

export default function App () {

    

    return(
        <Router>
            <div>
           
            <form action="/post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
   
    
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/product' element={<Products/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    );
}
