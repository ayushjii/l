import React from 'react';
import styled from 'styled-components';

const Productstyles = styled.section`

`
export default function Toproduct(){
    return(
        <Productstyles id="dishGrid" data-aos="fade-up">
    <div class="container">
      <h2 class="dishGrid__title">
        Top Dishes
      </h2>
      <div class="dishGrid__wrapper">
        <div class="dishGrid__item">
          <div class="dishGrid__item__img">
            <img src="./images/food-1.png" alt="food img" />
          </div>
          <div class="dishGrid__item__info">
            <h3 class="dishGrid__item__title">
              Vegan Salad bowl
            </h3>
            <h3 class="dishGrid__item__price">$12</h3>
            <div class="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star" />
            </div>
          </div>
        </div>
        <div class="dishGrid__item">
          <div class="dishGrid__item__img">
            <img src="./images/food-2.png" alt="food img" />
          </div>
          <div class="dishGrid__item__info">
            <h3 class="dishGrid__item__title">
              Vegan Pesto Zoodles
            </h3>
            <h3 class="dishGrid__item__price">$12</h3>
            <div class="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star" />
            </div>
          </div>
        </div>
        <div class="dishGrid__item">
          <div class="dishGrid__item__img">
            <img src="./images/food-7.png" alt="food img" />
          </div>
          <div class="dishGrid__item__info">
            <h3 class="dishGrid__item__title">
              Hot Green Bowl
            </h3>
            <h3 class="dishGrid__item__price">$12</h3>
            <div class="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </Productstyles>
    );
}