import React from 'react';
import styled from 'styled-components';
import {IoIosStar} from 'react-icons/io';
import {IoStarOutline} from 'react-icons/io5';
import c1 from '../images/p3.jpg';
import c2 from '../images/p4.jpg';
import c3 from '../images/p2.jpg';
import c4 from '../images/p1.jpg'; 

const RevStyles = styled.section`
.rev__wrapper {
	max-width: 400px;
	margin: 0 auto;
}
.rev__title {
	font-size: 1.8rem;
	margin-bottom: 3rem;
	text-align: center;
	color: var(--black-1);
}
.rev__items__wrapper {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}
.rev__item {
	padding: 1rem;
	display: flex;
	gap: 1rem;
	background-color: var(--lightGreen-1);
	border-radius: 12px;
}
.rev__item__info {
	flex: 4;
}
.rev__item__img {
	flex: 2;
	border-radius: 12px;
	overflow: hidden;
	width: 100%;
	height: 100%;
}
.rev__item__img img {
	object-fit: cover;
    content-align:center;
}
.rev__item__name {
	font-size: 1.4rem;
	font-family: poppins;
	margin-bottom: 1rem;
}
.rev__item__stars {
	max-height: 15px;
	width: max-content;
	margin-bottom: 1.5rem;
}
.rev__item__text {
	font-size: 1.4rem;
}
@media only screen and (min-width: 768px) {
	.rev__wrapper {
		max-width: 900px;
	}
	.rev__title {
		font-size: 3.6rem;
		margin-bottom: 5rem;
	}
	.rev__items__wrapper {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	.rev__item {
		padding: 2rem;
	}
	.rev__item__name {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
	}
	.rev__item__stars {
		margin-bottom: 2rem;
	}
	.rev__item__text {
		font-size: 1.6rem;
		line-height: 1.4em;
	}
}
@media only screen and (max-width: 350px) {
	.rev__item {
		flex-direction: column;
	}
	.rev__item__img,
	.rev__item__info {
		flex: auto;
	}
}
`
export default function Rev() {
    return(
        <RevStyles id="rev">
    <div className="container">
      <div className="rev__wrapper" data-aos="fade-up">
        <h2 className="rev__title">What Our Customers Say</h2>
        <div className="rev__items__wrapper">
          <div className="rev__item">
            <div className="rev__item__img">
              <img src={c1} alt="" />
            </div>
            <div className="rev__item__info">
              <h3 className="rev__item__name">Jhon</h3>
              <div className="rev__item__stars">
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
              <IoIosStar size={25} color="#031038" />
			  <IoStarOutline size={25} color="#031038" />
              </div>
              <p className="rev__item__text">
                “In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content”
              </p>
            </div>
          </div>
          <div className="rev__item">
            <div className="rev__item__img">
              <img src={c2} alt="" />
            </div>
            <div className="rev__item__info">
              <h3 className="rev__item__name">Anamika Sharma</h3>
              <div className="rev__item__stars">
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoStarOutline size={25} color="#031038" />
              </div>
              <p className="rev__item__text">
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content“
              </p>
            </div>
          </div>
          <div className="rev__item">
            <div className="rev__item__img">
              <img src={c3} alt="" />
            </div>
            <div className="rev__item__info">
              <h3 className="rev__item__name">Ankush</h3>
              <div className="rev__item__stars">
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
              <IoIosStar size={25} color="#031038" />
			  <IoStarOutline size={25} color="#031038" />
              </div>
              <p className="rev__item__text">
                “In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content“
              </p>
            </div>
          </div>
          <div className="rev__item">
            <div className="rev__item__img">
              <img src={c4} alt="" />
            </div>
            <div className="rev__item__info">
              <h3 className="rev__item__name">Gaurav Goyal</h3>
              <div className="rev__item__stars">
              <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
			  <IoIosStar size={25} color="#031038" />
              <IoIosStar size={25} color="#031038" />
			  <IoStarOutline size={25} color="#031038" /> 
              </div>
              <p className="rev__item__text">
                “In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content“
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </RevStyles>
    );
}