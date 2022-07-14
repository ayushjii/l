import React from 'react';
import styled from 'styled-components';
import pulse from '../images/goalpulse.jpg';
import meet from '../images/meet.jpg';
import rice from '../images/ricemain.jpg';

const GoalStyles = styled.section`
.ourGoals__info {
	text-align: left;
	margin-bottom: 5rem;
}
.ourGoals__imgs__wrapper img {
	object-fit: cover;
}
.ourGoals__imgs__wrapper {
	max-width: 800px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-row: auto;
	gap: 1rem;
}
.ourGoals__img1 {
	grid-row: 1/3;
}
.ourGoals__title {
	font-size: 1.8rem;
	font-weight: 600;
	color: var(--black-1);
	margin-bottom: 1rem;
}
.ourGoals__title {
		font-size: 3.6rem;
	}
@media only screen and (min-width: 768px) {
	.ourGoals__info {
		text-align: center;
	}
	.ourGoals__imgs__wrapper {
		gap: 2rem;
	}
	.ourGoals__text {
		margin: 0 auto;
	}
}`

export default function Goal() {
    return(
        <GoalStyles data-aos="fade-down">
    <div class="container">
      <div class="ourGoals__info">
        <h3 class="ourGoals__title">
          Our Goals
        </h3>
        <p class="ourGoals__text">
        Bringing up more items 
        </p>
      </div>
      <div class="ourGoals__imgs__wrapper" data-aos="fade-up">
        <div class="ourGoals__img1">
          <img src={rice} alt="" />
        </div>
        <div class="ourGoals__img2">
          <img src={meet} alt="" />
        </div>
        <div class="ourGoals__img3">
          <img src={pulse} alt="" />
        </div>
      </div>
    </div>
        </GoalStyles>
    );
}