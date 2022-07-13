import React from 'react';
import styled from 'styled-components';
import culture from '../images/culture.png'; 
import masala from '../images/masala.png';
import rice from '../images/sample.jpg';
import dal from '../images/made.jpg';
import {IoIosStar} from 'react-icons/io';
import {IoStarOutline} from 'react-icons/io5';

const TakeAwayStyles = styled.section`
.take__wrapper {
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	border-radius: 12px;
	background: var(--lightGreen-1) url(${culture})
		no-repeat bottom right / 100px;
}
.take__images {
	display: flex;
	gap: 1rem;
	width: 100%;
	margin-bottom: 2rem;
}
.take__img1 {
	flex: 2;
}
.take__img2 {
	flex: 3;
}
.take__images img {
	object-fit: cover;
	border-radius: 12px;
}
.take__text {
	font-size: 1.4rem;
	font-weight: 900;
	color: var(--green-1);
	margin-bottom: 0.5rem;
}
.take__title {
	font-size: 1.8rem;
	color: var(--black-1);
	font-weight: 600;
	margin-bottom: 1rem;
}
.take__price {
	font-size: 1.4rem;
	font-weight: 600;
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
}
.take__oldPrice {
	color: var(--black-2);
	text-decoration: line-through;
}
.take__newPrice {
	color: var(--green-1);
}
.take__stars {
	width: max-content;
	height: 15px;
	margin-bottom: 1rem;
}
@media only screen and (min-width: 768px) {
	.take__wrapper {
		flex-direction: row;
		gap: 4rem;
		padding: 2rem;
		align-items: center;
		background-size: 150px;
		margin: 0 auto;
	}
	.take__images {
		flex: 5;
		margin-bottom: 0;
		gap: 2rem;
	}
	.take__img1,
	.take__img2,
	.take__img3 {
		flex: 1;
		height: 350px;
	}
	.take__info {
		flex: 3;
	}
	.take__text {
		font-size: 2.4rem;
	}
	.take__title {
		font-size: 3.6rem;
		margin-bottom: 1.5rem;
	}
	.take__price {
		font-size: 2.4rem;
	}
	.take__stars {
		height: 20px;
		margin-bottom: 2rem;
	}
}
@media only screen and (max-width: 1000px) {
	.take__wrapper {
		gap: 2rem;
	}
	.take__img3 {
		display: none;
	}
}
`

export default function TakeAway(){
    return(
        <TakeAwayStyles id="take" data-aos="fade-up">
    <div className="container">
      <div className="take__wrapper">
        <div className="take__images">
          <div className="take__img1">
            <img src={rice} alt="Food img" />
          </div>
          <div className="take__img2">
            <img src={masala} alt="Food img" />
          </div>
          <div className="take__img3">
            <img src={dal} alt="Food img" />
          </div>
        </div>
        <div className="take__info">
          <h3 className="take__title">Take Away Your Order </h3>
          <h3 className="take__price">
            <span className="take__oldPrice">10%</span>
            <span className="take__newPrice">15% off</span>
          </h3>
          <div className="take__stars">
          <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoStarOutline size={25} color="#031038" />
          </div>
          <a className="btn primary-btn" href="./booking.html">Place Order</a>
        </div>
      </div>
    </div>
        </TakeAwayStyles>
    );
}