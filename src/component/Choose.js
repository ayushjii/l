import React from 'react';
import styled from 'styled-components';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFastfood} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';
import{GiBonsaiTree} from 'react-icons/gi';

const ChooseStyles = styled.section`
.whyUs__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 4rem;
}
.whyUs__left {
	text-align: center;
}
.whyUs__title {
	font-family: Poppins;
	font-size: 1.8rem;
	color: var(--black-1);
	font-weight: 500;
	margin-bottom: 1rem;
}
.whyUs__text {
	font-size: 1.4rem;
}
.whyUs__right {
	text-align: center;
}
.whyUs__items__wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
}
.whyUs__item {
	background: var(--lightGreen-1);
	padding: 2rem;
	border-radius: 12px;
}
.whyUs__item__icon {
	max-width: 56px;
	margin: 0 auto;
	margin-bottom: 1rem;
}
.whyUs__item__text {
	font-family: Poppins;
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--black-1);
}
@media only screen and (min-width: 768px) {
	.whyUs__wrapper {
		flex-direction: row;
		max-width: 900px;
		margin: 0 auto;
	}
	.whyUs__left {
		flex: 4;
		text-align: left;
	}
	.whyUs__right {
		flex: 3;
	}
	.whyUs__title {
		font-size: 3.6rem;
		margin-bottom: 2rem;
	}
	.whyUs__text {
		font-size: 1.8rem;
		line-height: 1.4em;
	}
	.whyUs__items__wrapper {
		gap: 1.5rem;
	}
	.whyUs__item {
		padding: 2rem;
	}
	.whyUs__item__icon {
		max-width: 65px;
		margin-bottom: 1.5rem;
	}
	.whyUs__item__text {
		font-size: 1.8rem;
	}
}
`

export default function Choose(){
    return(
        <ChooseStyles id="whyUs">
    <div className="container">
      <div className="whyUs__wrapper">
        <div className="whyUs__left" data-aos="fade-right">
          <h2 className="whyUs__title">
            Why Choose Our Product
          </h2>
          <p className="whyUs__text">
            Quality of Service, Product, Quality and Value of Money are the primary elements for choosing a Company's Products.
            Jadoo Chawal is one of the most well focus for thier Variety in Delhi cities, 
            Well Known for it's Quality of rice and Experience of <b>20 YEARS</b>
          </p>
        </div>
        <div className="whyUs__right" data-aos="fade-left">
          <div className="whyUs__items__wrapper">
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
              <MdFastfood size={80} color="#857e00" />
              </div>
              <p className="whyUs__item__text">Quality Product</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
              <GiBonsaiTree  size={80} color="#850000"/>
              </div>
              <p className="whyUs__item__text">Organic</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
              <FaUsers size={80} color="#008580" />
              </div>
              <p className="whyUs__item__text">Experience</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
               <TbTruckDelivery size={80} color="#006400" />
              </div>
              <p className="whyUs__item__text">Fast Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </ChooseStyles>
    );
}