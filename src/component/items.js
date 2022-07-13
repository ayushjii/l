import React from 'react';
// import styled from 'styled-components';
import Rice from '../images/rice.jpg';

export default function ItemsComp ({
    Product_name="Name",
    price="@",
    itemimage=Rice
}){
    return(
        <div class="dishGrid__item">
        <div class="dishGrid__item__img">
          <img src={itemimage} alt="" />
        </div>
        <div class="dishGrid__item__info">
          <h3 class="dishGrid__item__title">
            {Product_name}
          </h3>
          <h3 class="dishGrid__item__price">{price}</h3>
          <div class="dishGrid__item__stars">
            
          </div>
        </div>
      </div>
    );
}