import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.section`
padding: 5rem 0;

.form__title {
	font-size: 1.8rem;
	color: var(--black-1);
	font-weight: 600;
}
.form__wrapper {
	padding: 3rem 0;
}
.form__wrapper form {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem 6rem;
}
.form__group label {
	font-size: 1.6rem;
	font-family: Poppins;
	color: var(--black-2);
	font-weight: 500;
}
.form__group input,
.form__group textarea,
.form__group select {
	width: 100%;
	border: none;
	background-color: var(--lightGreen-1);
	font-size: 1.4rem;
	font-family: Raleway;
	font-weight: 600;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 0.5rem;
	color: var(--black-2);
}
.form__group textarea {
	resize: vertical;
}
.form__wrapper button[type='submit'] {
	width: max-content;
	border: none;
	padding: 1rem 4rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
}
@media only screen and (min-width: 768px) {
	.form__title {
		font-size: 3.6rem;
	}
	.form__wrapper {
		padding: 5rem 0;
	}
	.form__wrapper form {
		grid-template-columns: 1fr 1fr;
	}
	.form__group__full {
		grid-column: 1/3;
	}
	.form__group label {
		font-size: 1.8rem;
	}
	.form__group input,
	.form__group textarea,
	.form__group select {
		font-size: 1.8rem;
		padding: 2rem;
		margin-top: 1.5rem;
	}
}
`

export default function Form() {
    return(
        <FormStyles data-aos="fade-down">
        <div class="container">
          <h3 class="form__title">
            Contact & Inquiry
          </h3>
          <div class="form__wrapper">
            <form name="contact" method="POST" netlify>
              <div class="form__group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="First Name" required />
              </div>
              <div class="form__group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="Last Name" required />
              </div>
              <div class="form__group">
                <label for="tel">Phone no.</label>
                <input type="tel" id="tel" name="tel" required />
              </div>
              <div class="form__group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="Subject" required />
              </div>
              <div class="form__group form__group__full">
                <label for="message">Message</label>
                <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
              </div>
              <button type="submit" class="btn primary-btn">Send</button>
            </form>
          </div>
        </div>
        </FormStyles>
    );
}