import React from 'react';
import styled from 'styled-components';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';
import {MdOutlineRiceBowl} from 'react-icons/md';

const d = new Date();
  let year = d.getFullYear();

const FooterStyles = styled.div`
footer {
	background: var(--lightGreen-1);
	padding-top: 5rem;
	padding-bottom: 2rem;
}
.footer__wrapper {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}
.footer__logo {
	width: 150px;
	margin-bottom: 2rem;
    font-size: 50px;
}
.footer__desc {
	font-size: 1.4rem;
	color: var(--black-2);
	margin-bottom: 2rem;
}
.footer__socials__title {
	font-size: 1.8rem;
	color: var(--black-1);
	margin-bottom: 1rem;
}
.footer__socials li {
	display: inline-block;
	margin-right: 0.5rem;
}
.footer__socials a {
	padding: 0.5rem 0.8rem;
	background-color: var(--white-1);
	border: 1px solid var(--green-2);
	border-radius: 8px;
}
.footer__socials svg {
	width: 20px;
	color: var(--black-2);
}
.footer__text__title {
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: var(--black-1);
	font-weight: 600;
}
.footer__text a {
	font-size: 1.4rem;
	margin-bottom: 0.5rem;
	color: var(--black-2);
	font-family: Raleway;
	font-weight: 500;
	line-height: 1.4em;
}
@media only screen and (min-width: 768px) {
	footer {
		padding-top: 8rem;
		padding-bottom: 4rem;
	}
	.footer__wrapper {
		flex-direction: row;
	}
	.footer__col1 {
		flex: 4;
	}
	.footer__col2,
	.footer__col3,
	.footer__col4 {
		flex: 2;
	}
	.footer__desc {
		max-width: 300px;
		font-size: 1.8rem;
		margin-bottom: 2.5rem;
	}
	.footer__socials__title {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	.footer__text__title {
		font-size: 2rem;
		margin-bottom: 2rem;
    text-align: center;
	}
	.footer__text a {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
}
#copyright {
	padding: 1rem 0;
}
.copyright__text {
	font-size: 1.4rem;
	text-align: center;
}
ol, ul {
    list-style: none;
}
@media only screen and (min-width: 768px) {
	.copyright__text {
		font-size: 1.6rem;
		text-align: left;
	}
}
`
export default function Footer() {
    return(
        <FooterStyles>
          <footer>
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__col1">
          <div className="footer__logo">
          <div><MdOutlineRiceBowl />Jc</div>
          </div>
          <p className="footer__desc">
            Fresh and delicious traditional Bangladeshi food to delight the whole family.
          </p>
          <div className="footer__socials">
            <h4 className="footer__socials__title">Follow us</h4>
            <ol className="footer__socials__list">
              <li>
                <a href="/">
                  <FiFacebook size={30} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiInstagram size={30} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FiTwitter size={30} />
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="footer__col2">
          <h3 className="footer__text__title">
            Links
          </h3>
          <ol className="footer__text">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/order">Place Order</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">contact Us</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ol>
        </div>
        <div className="footer__col3">
          <h3 className="footer__text__title">
            Support
          </h3>
          <ol className="footer__text">
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Support Center</a>
            </li>
            <li>
              <a href="/">Feedback</a>
            </li>
          </ol>
        </div>
        <div className="footer__col4">
          <h3 className="footer__text__title">
            Contact
          </h3>
          <ol className="footer__text">
            <li>
              <a href="/">9211017025</a>
            </li>
            <li>
              <a href="/">Jc@gmail.com</a>
            </li>
            <li>
              <a href="/">Madipur, New Delhi, India</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </footer>
  <div id="copyright">
    <div className="container">
      <p className="copyright__text">
      © {year} - Ayush Goyal | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="mailto:pawangoyal6789.com">
            KRPKG
            </a>{' '}
      </p>
    </div>
  </div>
        </FooterStyles>
    );
}