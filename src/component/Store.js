import React from 'react';
import styled from 'styled-components';
import {BsFillClockFill} from 'react-icons/bs';
import {IoCall} from 'react-icons/io5';
import {HiLocationMarker} from "react-icons/hi";

const InfoStyles = styled.div`
.storeInfo__wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}
.storeInfo__item {
	background-color: var(--lightGreen-1);
	padding: 20px 30px;
	text-align: center;
	text-align: center;
	border-radius: 12px;
	width: 150px;
}
.storeInfo__icon {
	width: 30px;
	margin: 0 auto;
	margin-bottom: 1.5rem;
   
}
.storeInfo__title {
	font-size: 1.4rem;
	font-family: Poppins;
	font-weight: 500;
	margin-bottom: 0.5rem;
	color: var(--black-1);
}
.storeInfo__text {
	font-size: 1.4rem;
	font-family: Raleway;
	color: var(--black-2);
}
@media only screen and (min-width: 768px) {
	.storeInfo__wrapper {
		gap: 2rem;
	}
	.storeInfo__item {
		min-width: 200px;
		padding: 40px 0;
	}
	.storeInfo__icon {
		width: 47px;
		margin-bottom: 2.5rem;
	}
	.storeInfo__title {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	.storeInfo__text {
		font-size: 1.6rem;
	}
}
`

export default function Info(){
    return(
        <InfoStyles id="storeInfo" data-aos="fade-up">
    <div className="container">
      <div className="storeInfo__wrapper">
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
           <BsFillClockFill size={65} color="#26643b" />
          </div>
          <h3 className="storeInfo__title">
            11 AM - 9 PM
          </h3>
          <p className="storeInfo__text">
            Opening Hours
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
           <HiLocationMarker size={65} color="#26643b"/>
          </div>
          <h3 className="storeInfo__title">
            Madipur, New Delhi-110068
          </h3>
          <p className="storeInfo__text">
            Address
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
           <IoCall size={65} color="#26643b"/>
          </div>
          <h3 className="storeInfo__title">
            9211017025
          </h3>
          <p className="storeInfo__text">
            Call Now
          </p>
        </div>
      </div>
    </div>
        </InfoStyles>
    );
}