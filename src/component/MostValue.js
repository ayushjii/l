import React from 'react';
import styled from 'styled-components';
import rice from '../images/rice.jpg';
import pulse from '../images/pulse.jpg';
import atta from '../images/flour.jpg';
import Spices from '../images/spice.jpg';


const MostValueStyles = styled.section`
	padding: 0;

.ourSpecials__title {
	font-size: 1.8rem;
	color: var(--black-1);
	margin-bottom: 2rem;
}
.ourSpecials__wrapper {
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	max-width: 400px;
}
.ourSpecials__item {
	flex: 1;
	display: flex;
	gap: 2rem;
	background-color: var(--lightGreen-1);
	padding: 1.5rem;
	border-radius: 12px;
}
.ourSpecials__item__img,
.ourSpecials__item__info {
	flex: 1;
}
.ourSpecials__item__img {
	border-radius: 12px;
	overflow: hidden;
}
.ourSpecials__item__img img {
	object-fit: cover;
}
.ourSpecials__item__title {
	font-size: 2.4rem;
	font-weight: 500;
	margin-bottom: 1rem;
	color: var(--black-1);
	line-height: 1.2em;
}
.ourSpecials__item__price {
	font-size: 1.8rem;
	color: var(--green-1);
	font-weight: 600;
	margin-bottom: 1rem;
}
.ourSpecials__item__stars {
	width: max-content;
}
@media only screen and (min-width: 768px) {
	.ourSpecials__title {
		font-size: 2.4rem;
	}
	.ourSpecials__wrapper {
		flex-direction: row;
		gap: 2rem;
		max-width: none;
	}
	.ourSpecials__item {
		padding: 3rem;
		gap: 2rem;
	}
	.ourSpecials__item__title {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}
	.ourSpecials__item__price {
		font-size: 2.4rem;
		margin-bottom: 1.5rem;
	}
}
@media only screen and (min-width: 1100px) {
	.ourSpecials__item__img {
		flex: 4;
	}
	.ourSpecials__item__info {
		flex: 3;
	}
}
`

export default function MostValue(){
    return(
        <MostValueStyles >
        <div class="container">
        <h3 class="ourSpecials__title">Our Specials</h3>
        <div class="ourSpecials__wrapper">
          <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
              <img src={rice} alt="" />
            </div>
            <div class="ourSpecials__item__info">
              <h3 class="ourSpecials__item__title">
                Rice
              </h3>
              <h4 class="ourSpecials__item__price">@</h4>
            </div>
          </div>
          <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
              <img src={pulse} alt="" />
            </div>
            <div class="ourSpecials__item__info">
              <h3 class="ourSpecials__item__title">
               Pulses
              </h3>
              <h4 class="ourSpecials__item__price">@</h4>
            </div>
          </div>
          <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
              <img src={atta} alt="" />
            </div>
            <div class="ourSpecials__item__info">
              <h3 class="ourSpecials__item__title">
              Flour              
              </h3>
              <h4 class="ourSpecials__item__price">@</h4>
            </div>
          </div>
          <div class="ourSpecials__item">
            <div class="ourSpecials__item__img">
              <img src={Spices} alt="" />
            </div>
            <div class="ourSpecials__item__info">
              <h3 class="ourSpecials__item__title">
                Spices
              </h3>
              <h4 class="ourSpecials__item__price">@</h4>
            </div>
          </div>
        </div>
      </div>  
      </MostValueStyles>
    );
 }