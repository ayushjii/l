import React from 'react';
import styled from 'styled-components';
import pulse from  '../images/pulse.jpg';
import spices from '../images/three.jpg';
import {IoIosStar, IoIosStarHalf} from 'react-icons/io';

const SpecialStyles =styled.section`
	padding-top: 10rem;
	margin-top: 8rem;

.ourSpecials__wrapper {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}
.ourSpecials__left {
	display: flex;
	gap: 1rem;
}
.ourSpecials__item {
	background-color: var(--lightGreen-1);
	padding: 1.2rem;
	padding-top: 5rem;
	border-radius: 12px;
	width: 45%;
	margin: 0 auto;
}
.ourSpecials__item__img {
	margin-top: calc(-50% - 2rem);
	margin-bottom: 2rem;
	border-radius: 12px;
	height: 150px;
	overflow: hidden;
}
.ourSpecials__item__img img {
	object-fit: cover;
}
.ourSpecials__item__title {
	font-size: 1.4rem;
	color: var(--black-1);
	font-weight: 600;
	margin-bottom: 1rem;
}
.ourSpecials__item__price {
	color: var(--green-1);
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: 1rem;
}
.ourSpecials__item__stars {
	height: 1.5rem;
	width: max-content;
	margin-bottom: 1rem;
}
.ourSpecials__item__text {
	font-size: 1.4rem;
	color: var(--black-2);
	font-weight: 500;
}
.ourSpecials__title {
	font-size: 1.8rem;
	margin-bottom: 1.5rem;
	color: var(--black-1);
}
.ourSpecials__text {
	font-size: 1.4rem;
	color: var(--black-2);
	margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
		padding-top: 15rem;
	
	 .container {
		max-width: 900px;
	}
	.ourSpecials__wrapper {
		flex-direction: row;
	}
	.ourSpecials__right {
		flex: 2;
	}
	.ourSpecials__left {
		flex: 4;
		gap: 2rem;
	}
	.ourSpecials__item {
		padding: 2rem;
	}
	.ourSpecials__item__title {
		font-size: 2.4rem;
		line-height: 1.4em;
		margin-bottom: 1.5rem;
	}
	.ourSpecials__item__price {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	.ourSpecials__item__stars {
		margin-bottom: 2rem;
	}
	.ourSpecials__item__text {
		font-size: 1.6rem;
	}
	.ourSpecials__title {
		font-size: 3.6rem;
		margin-bottom: 1.5rem;
	}
	.ourSpecials__text {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
	}
}

@media only screen and (max-width: 300px) {
	.ourSpecials__left {
		flex-wrap: wrap;
		gap: 10rem;
	}
	.ourSpecials__item {
		width: 100%;
	}
}
`

export default function Special(){
    return(
        <SpecialStyles data-aos="fade-up">
    <div className="container">
      <div className="ourSpecials__wrapper">
        <div className="ourSpecials__left">
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src={spices} alt="spices" />
            </div>
            <h2 className="ourSpecials__item__title">
              Home Grinded Spices
            </h2>
            <h3 className="ourSpecials__item__price">
              Rs. 70 per 200gm
            </h3>
            <div className="ourSpecials__item__stars">
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
            <p className="ourSpecials__item__text">
            Spices like <b>Turmeric</b>, <b>Chilli</b>& <b>Coriander</b> are being self grinded by us 
			considering the quality of Spices usage of best and selected items to grind.
			</p>
          </div>
		  
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src={pulse} alt="pulse" />
            </div> 
            <h2 className="ourSpecials__item__title">
              Organic(desi) Pulses
            </h2>
            <h3 className="ourSpecials__item__price">
              Rs. 85 per 500gm
            </h3>
            <div className="ourSpecials__item__stars">
			<IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
            <p className="ourSpecials__item__text">
              Without colour and Polish Organic Pulses are only provided by us 
			  Desi Dal with the best quality of each selected item are available here.
            </p>
          </div>
        </div>
        <div className="ourSpecials__right">
          <h2 className="ourSpecials__title">
            Our Specials
          </h2>
          <p className="ourSpecials__text">
		  Our Products like Spices and Wheat flour are produced according to the 
		  demand of the customer requirement. 

		 <b> Grind Fresh !! Sell Fresh !!</b>
          </p>
          <a href="./booking" className="btn primary-btn">Book Order</a>
        </div>
      </div>
    </div>
  </SpecialStyles>
    );
}