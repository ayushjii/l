import React from 'react';
import styled from 'styled-components';

const ItemStyles = styled.div`

`
export default function ItemsComp ({
    Product_name="Name",
    price="@"
}){
    return(
        <ItemStyles class="dishGrid__item">
        <div class="dishGrid__item__img">
          <img src="./images/food-1.png" alt="food img" />
        </div>
        <div class="dishGrid__item__info">
          <h3 class="dishGrid__item__title">
            {Product_name}
          </h3>
          <h3 class="dishGrid__item__price">{price}</h3>
          <div class="dishGrid__item__stars">
            <img src="./images/3star.png" alt="3 star" />
          </div>
        </div>
      </ItemStyles>
    );
}