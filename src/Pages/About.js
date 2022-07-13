import React from 'react';
import { Navbarmain } from "../component/NavbarMain"; 
import Footer from "../component/Footer";
import Story from '../component/Story';
import Goal from '../component/Goal';

export default function About() {
    return(
        <div>
            <Navbarmain />
            <Story />
            <Goal />
            <Footer />
        </div>
    );
} 
