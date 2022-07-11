import React from 'react';
import {MdOutlineRiceBowl} from 'react-icons/md'
import styled from 'styled-components';
import {ImCross} from 'react-icons/im';
import {FcList} from 'react-icons/fc';
import  Button  from 'react-bootstrap/Button';

const Navbarstyle = styled.div`
	padding: 2rem 0;

.nav__icon,
.nav__close,
.nav__bgOverlay {
	display: none;
}
.nav__wrapper {
	display: flex;
	justify-content: space-between;
}
.nav__list li {
	display: inline-block;
	margin: 0 1rem;
}
.nav__list .nav__link {
	font-size: 1.8rem;
	font-family: Poppins;
	color: var(--black-2);
	padding: 0.5rem;
}
.nav__list li:hover .nav__link {
	color: var(--green-1);
}
@media only screen and (max-width: 768px) {
		position: relative;
		
	.nav__icon {
		display: block;
	}
	.nav__icon svg,
	.nav__close svg {
		pointer-events: none;
		height: 30px;
		width: 30px;
	}
	.nav__close {
		display: block;
		position: absolute;
		color: var(--black-1);
		right: 1rem;
		top: 1rem;
		cursor: pointer;
	}
	.nav__list {
		z-index: 1000;
		position: absolute;
		left: 100%;
		top: 0;
		height: 100vh;
		width: 80%;
		background: var(--lightGreen-1);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 2rem;
		transform: translate(0%);
		overflow: hidden;
		transition: 0.3s ease-in transform;
	}
	.nav__list.show {
		transform: translate(-100%);
	}
	.nav__list li {
		display: block;
		text-align: right;
		margin-bottom: 2rem;
	}
	.nav__list a {
		font-size: 1.6rem;
	}
	.nav__bgOverlay {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1000;
		height: 100vh;
		width: 100%;
		background: rgba(18, 24, 14, 0.808);
		display: none;
	}
	.nav__bgOverlay.active {
		display: block;
	}
}
.logo{
   font-size: 50px;
}
`

export default function Navbar(){
    return(
        <Navbarstyle>
        <div className="container">
          <div className="nav__wrapper">
            <a href="/" className="logo">
              <div><MdOutlineRiceBowl />Jc</div>
            </a>
            <nav>
              <div className="nav__icon">
                 <FcList className="feather feather-menu" />
              </div>
              <div className="nav__bgOverlay"></div>
              <ul className="nav__list">
                <div className="nav__close">
                    <ImCross className="feather feather-x" />
                </div>
                <div className="nav__list__wrapper">
    
                  <li><a className="nav__link" href="./index">Home</a></li>
                  <li><a className="nav__link" href="./menu">Menu</a></li>
                  <li><a className="nav__link" href="./about">About</a></li>
                  <li><a className="nav__link" href="./contact">Contact</a></li>
                  <li><Button href="/" className="btn primary-btn">Book Order</Button></li>
				</div>
              </ul>
            </nav>
          </div>
        </div>
       </Navbarstyle>
    );
}