import React from 'react';
import styled from 'styled-components';
import mix from '../images/c.png';

const MainStyles = styled.section`

.hero__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column-reverse;
	gap: 5rem;
}
.hero__left__wrapper {
	max-width: 350px;
}
.hero__imgWrapper {
	max-width: 400px;
	width: 80%;
	margin: 0 auto;
}
.hero__heading {
	font-family: Poppins;
	font-weight: 600;
	line-height: 1.4em;
	text-align: center;
	font-size: 1.8rem;
	margin-bottom: 1.5rem;
	color: var(--black-1);
}
.hero__info {
	text-align: center;
	font-size: 1.4rem;
	margin-bottom: 1.5rem;
	color: var(--black-2);
}
.button__wrapper {
	text-align: center;
}

@media only screen and (min-width: 768px) {
	.hero__wrapper {
		flex-direction: row;
		gap: 0;
	}
	.hero__left {
		flex: 3;
	}
	.hero__right {
		flex: 4;
	}
	.hero__heading {
		font-size: 3.6rem;
		margin-bottom: 2rem;
		text-align: left;
	}

	.hero__info {
		margin-bottom: 2rem;
		text-align: left;
		font-size: 1.8rem;
	}

	.button__wrapper {
		text-align: left;
	}
	.hero__imgWrapper {
		max-width: none;
		width: 90%;
	}
}
@media only screen and (max-width: 900px) {
	.hero__left,
	.hero__right {
		flex: 1;
	}
}
`

export default function Sign() {
    return(
    <MainStyles>
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__left" data-aos="fade-left">
          <div className="hero__left__wrapper">

            <h1 className="hero__heading">The flavor of tradition</h1>
            <p className="hero__info">
              We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
              dining
              environment.
            </p>
            <div className="button__wrapper">
              <a href="./menu.html" className="btn primary-btn">Explore Menu</a>
              <a href="/" className="btn">Book Table</a>
            </div>
          </div>
        </div>
        <div className="hero__right" data-aos="fade-right">
          <div className="hero__imgWrapper">
            <img src={mix} alt='' />
          </div>
        </div>
      </div>
    </div>
    </MainStyles>
    );
}