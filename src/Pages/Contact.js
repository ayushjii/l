import React from 'react';
import { Navbarmain } from "../component/NavbarMain"; 
import Footer from "../component/Footer";
import Info from '../component/Store';
import Form from '../component/FeedForm.js';

export default function Contact() {
    return(
        <div>
           <Navbarmain />
           <Info />
           <Form />
            <Footer />
        </div>
    );
} 
