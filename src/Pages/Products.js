import React from 'react';
import { Navbarmain } from "../component/NavbarMain"; 
import Footer from "../component/Footer";
import MostValue from '../component/MostValue';
import RiceBar from '../component/Rice';
import PulseBar from '../component/Pulse';
import FlourBar from '../component/Flour';
import SpiceBar from '../component/Spice';
import styled from 'styled-components';

const Productstyles = styled.section`
	padding-top: 3rem;
	padding-bottom: 2rem;

.page__title__text {
	font-size: 2.2rem;
	color: var(--black-1);
}
@media only screen and (min-width: 768px) {
	#page__title {
		padding-top: 5rem;
		padding-bottom: 3rem;
	}
	.page__title__text {
		font-size: 3.6rem;
	}
}
`

export default function Products() {
    return(
        <div>
             <Navbarmain />
              <Productstyles data-aos="fade-up">
                <div class="container">
                 <h2 class="page__title__text">
                   Explore Our Large Variety Of Products
                 </h2>
                </div>
              </Productstyles>
  
              <MostValue />
              <RiceBar />
              <PulseBar />
              <FlourBar />
              <SpiceBar />
             <Footer />
        </div>
    );
} 
