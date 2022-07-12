import React from 'react';
import styled from 'styled-components';
import {IoIosStar, IoIosStarHalf} from 'react-icons/io';
import rice from '../images/rice.jpg';
import pulses from '../images/pulse.jpg';
import spice from  '../images/three.jpg';
import Atta from '../images/flour.jpg';

const Productstyles = styled.section`
.topproduct__title {
	font-size: 1.8rem;
	margin-bottom: 2rem;
	font-weight: 600;
	color: var(--black-1);
}
.topproduct__wrapper {
	display: grid;
	/* grid-template-columns: repeat(autofit, minmax(140px, 1fr)); */
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	gap: 1rem;
}
.topproduct__item {
	display: flex;
	flex-direction: column;
	background-color: var(--lightGreen-1);
	padding: 0.5rem;
	border-radius: 8px;
	gap: 0.5rem;
}
.topproduct__item__img {
	flex: 4;
}
.topproduct__item__info {
	flex: 5;
}
.topproduct__item__img img {
	object-fit: cover;
	border-radius: 12px;
}
.topproduct__item__title {
	font-size: 1.4rem;
	line-height: 1.3em;
	font-weight: 500;
	color: var(--black-1);
	margin-bottom: 0.5rem;
}
.topproduct__item__price {
	font-size: 1.4rem;
	color: var(--green-1);
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.topproduct__item__stars {
	max-height: 15px;
	width: max-content;
}
@media only screen and (min-width: 768px) {
	.topproduct__title {
		font-size: 2.4rem;
	}
	.topproduct__wrapper {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 3rem;
	}
	.topproduct__item {
		flex-direction: row;
		padding: 1.5rem;
		border-radius: 12px;
		gap: 1rem;
	}
	.topproduct__item__title {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}
	.topproduct__item__price {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}
`
export default function Toproduct(){
    return(
        <Productstyles id="topproduct" data-aos="fade-up">
    <div className="container">
      <h2 className="topproduct__title">
        Top Products
      </h2>
      <div className="topproduct__wrapper">
        <div className="topproduct__item">
          <div className="topproduct__item__img">
            <img src={rice} alt="food img" />
          </div>
          <div className="topproduct__item__info">
            <h3 className="topproduct__item__title">
              Rice
            </h3>
            <h3 className="topproduct__item__price">@</h3>
            <div className="topproduct__item__stars">
            <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
          </div>
        </div>
        <div className="topproduct__item">
          <div className="topproduct__item__img">
            <img src={Atta} alt="food img" />
          </div>
          <div className="topproduct__item__info">
            <h3 className="topproduct__item__title">
              Flour
            </h3>
            <h3 className="topproduct__item__price">@</h3>
            <div className="topproduct__item__stars">
            <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
          </div>
        </div>
        <div className="topproduct__item">
          <div className="topproduct__item__img">
            <img src={pulses} alt="food img" />
          </div>
          <div className="topproduct__item__info">
            <h3 className="topproduct__item__title">
              Pulses
            </h3>
            <h3 className="topproduct__item__price">@</h3>
            <div className="topproduct__item__stars">
            <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
          </div>
        </div>
        <div className="topproduct__item">
          <div className="topproduct__item__img">
            <img src={spice} alt="food img" />
          </div>
          <div className="topproduct__item__info">
            <h3 className="topproduct__item__title">
              Spices
            </h3>
            <h3 className="topproduct__item__price">@</h3>
            <div className="topproduct__item__stars">
            <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStarHalf size={25} color="#031038" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </Productstyles>
    );
}