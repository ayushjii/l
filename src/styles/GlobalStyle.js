import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
	font-size: 10px;
	overflow-x: hidden;
}
body {
	background: var(--lightGreen-2);
	overflow-x: hidden;
}
section {
	padding: 100px 0;
}
@media only screen and (max-width: 767px) {
	section {
		padding: 50px 0;
	}
}
.container {
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
}
:root {
	--green-1: #26643b;
	--green-2: #a2de96;
	--lightGreen-1: #d6e5d8;
	--lightGreen-2: #f5fcf4;
	--black-1: #3b413a;
	--black-2: #3f3c3c;
	--black-3: #5b6359;
	--white-1: #e8e8e8;
}
img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
h1,
h2,
h3,
h4 {
	font-family: Poppins;
}
p {
	font-family: Raleway;
	font-weight: 400;
	line-height: 1.4em;
	font-size: 1.8rem;
}
a {
	display: inline-block;
	text-decoration: none;
}
.btn {
	color: var(--green-1);
	font-family: Poppins;
	font-weight: 500;
	border-radius: 8px;
	font-size: 1.4rem;
	padding: 1.2rem 2rem;
}
.primary-btn {
	color: var(--white-1);
	background: var(--green-1);
}
@media only screen and (min-width: 700px) {
	.btn {
		padding: 1.3rem 2rem;
		font-size: 2rem;
	}
}

`;
export default GlobalStyles;
