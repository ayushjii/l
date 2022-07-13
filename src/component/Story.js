import React from 'react';
import styled from 'styled-components';
import group from '../images/group.jpg';

const StoryStyles = styled.section`
.ourStory__wrapper {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
.ourStory__title,
.ourGoals__title {
	font-size: 1.8rem;
	font-weight: 600;
	color: var(--black-1);
	margin-bottom: 1rem;
}
.ourStory__subtitle {
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--black-1);
	margin-bottom: 2rem;
}
.ourStory__text,
.ourGoals__text {
	font-size: 1.4rem;
	line-height: 1.4em;
	color: var(--black-2);
}
@media only screen and (min-width: 768px) {
	.ourStory__wrapper {
		flex-direction: row;
		gap: 3rem;
	}
	.ourStory__img,
	.ourStory__info {
		flex: 1;
	}
	.ourStory__title,
	.ourGoals__title {
		font-size: 3.6rem;
	}
	.ourStory__subtitle {
		font-size: 1.8rem;
	}
	.ourStory__text,
	.ourGoals__text {
		font-size: 1.8rem;
		max-width: 800px;
	}
}`

export default function Story(){
    return(
        <StoryStyles  data-aos="fade-up">
        <div class="container">
          <div class="ourStory__wrapper">
    
            <div class="ourStory__img">
              <img src={group} alt="Jadoo Chawal" />
            </div>
            <div class="ourStory__info">
              <h3 class="ourStory__title">
                Our Story
              </h3>
              <p class="ourStory__subtitle">
                It's all started since 1998
              </p>
              <p class="ourStory__text">
                Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering
                culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a
                dining
                experience to remember.
                <br></br>
                Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
                business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
                seating for up to 65 guests, we can cater for all occasions.
              </p>
            </div>
          </div>
        </div>
      </StoryStyles>
    );
}