import React from 'react';
import styled from 'styled-components';
import ItemsComp from './items';
// import spice from '../images/rice.jpg';

const RiceStyles = styled.section`
	padding-bottom: 0;

#dishGrid:last-of-type {
	padding-bottom: 10rem;
}

.dishGrid__title {
	font-size: 1.8rem;
	margin-bottom: 2rem;
	font-weight: 600;
	color: var(--black-1);
}
.dishGrid__wrapper {
	display: grid;
	/* grid-template-columns: repeat(autofit, minmax(140px, 1fr)); */
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	gap: 1rem;
}
.dishGrid__item {
	display: flex;
	flex-direction: column;
	background-color: var(--lightGreen-1);
	padding: 0.5rem;
	border-radius: 8px;
	gap: 0.5rem;
}
.dishGrid__item__img {
	flex: 4;
}
.dishGrid__item__info {
	flex: 5;
}
.dishGrid__item__img img {
	object-fit: cover;
	border-radius: 12px;
}
.dishGrid__item__title {
	font-size: 1.4rem;
	line-height: 1.3em;
	font-weight: 500;
	color: var(--black-1);
	margin-bottom: 0.5rem;
}
.dishGrid__item__price {
	font-size: 1.4rem;
	color: var(--green-1);
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.dishGrid__item__stars {
	max-height: 15px;
	width: max-content;
}
@media only screen and (min-width: 768px) {
	.dishGrid__title {
		font-size: 2.4rem;
	}
	.dishGrid__wrapper {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 3rem;
	}
	.dishGrid__item {
		flex-direction: row;
		padding: 1.5rem;
		border-radius: 12px;
		gap: 1rem;
	}
	.dishGrid__item__title {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}
	.dishGrid__item__price {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}
`
export default function RiceBar(){
    return(
        <RiceStyles data-aos="fade-up">
    <div class="container">
      <h2 class="dishGrid__title">
        Rice
      </h2>
      <div class="dishGrid__wrapper">
      <ItemsComp />
      <ItemsComp />
      <ItemsComp />
      <ItemsComp />
      <ItemsComp />
      <ItemsComp />
      <ItemsComp />
      </div>
      </div>
      </RiceStyles>
    );
}