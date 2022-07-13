import React from 'react';
import { Navbarmain } from "../component/NavbarMain"; 
import Footer from "../component/Footer";
import MostValue from '../component/MostValue';
import RiceBar from '../component/Rice';

export default function Products() {
    return(
        <div>
             <Navbarmain />
              <MostValue />
              <RiceBar />
             <Footer />
        </div>
    );
} 
