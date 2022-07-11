import React from 'react';
import styled from 'styled-components';

const SpecialStyles =styled.section`
#ourSpecials {
	padding-top: 10rem;
}
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
	#ourSpecials {
		padding-top: 15rem;
	}
	#ourSpecials .container {
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
        <SpecialStyles id="ourSpecials" data-aos="fade-up">
    <div className="container">
      <div className="ourSpecials__wrapper">
        <div className="ourSpecials__left">
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src="./images/food-3.png" alt="food img" />
            </div>
            <h2 className="ourSpecials__item__title">
              Sweet Potato Fries Bowl
            </h2>
            <h3 className="ourSpecials__item__price">
              $18
            </h3>
            <div className="ourSpecials__item__stars">
              <img src="./images/3star.png" alt="3 stars" />
            </div>
            <p className="ourSpecials__item__text">
              These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded
              with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder,
              garlic, and onion, these spicy sweet potato fries are full of flavor.
            </p>
          </div>
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src="./images/food-1.png" alt="food img" />
            </div> 
            <h2 className="ourSpecials__item__title">
              Vegan Salad bowl
            </h2>
            <h3 className="ourSpecials__item__price">
              $18
            </h3>
            <div className="ourSpecials__item__stars">
              <img src="./images/3star.png" alt="3 stars" />
            </div>
            <p className="ourSpecials__item__text">
              Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or
              cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion
              of flavors and textures.
            </p>
          </div>
        </div>
        <div className="ourSpecials__right">
          <h2 className="ourSpecials__title">
            Our Specials
          </h2>
          <p className="ourSpecials__text">
            All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
            delivered to our customers
          </p>
          <a href="./booking.html" className="btn primary-btn">Book Table</a>
        </div>
      </div>
    </div>
  </SpecialStyles>
    );
}