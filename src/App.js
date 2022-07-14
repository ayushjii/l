import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Products from './Pages/Products';

export default class App extends Component {

    constructor(props) {
    
        super(props);
        this.state = {
            users: []
        }
       } 
    
        componentDidMount() {
            fetch('/api/users')
        }
        render() {
    return(
        <Router>
            <div>
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
}