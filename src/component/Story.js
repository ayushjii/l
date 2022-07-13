import React from 'react';
import styled from 'styled-components';

const StoryStyles = styled.section`

`
export default function Story(){
    return(
        <StoryStyle id="ourStory" data-aos="fade-up">
        <div class="container">
          <div class="ourStory__wrapper">
    
            <div class="ourStory__img">
              <img src="./images/ourStoryImg.png" alt="shaif's cuisine">
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
                <br><br>
                Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
                business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
                seating for up to 65 guests, we can cater for all occasions.
              </p>
            </div>
          </div>
        </div>
      </StoryStyle>
    );
}