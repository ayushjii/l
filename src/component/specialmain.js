import React from 'react';
import spices from '../images/three.jpg';


export default function Ourspecial({
    product="Name of product",
    text="about it",
    cost="Rs. ",
    p_img={spices}
}){
    return(
            <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src={spices} alt="spices" />
            </div>
            <h2 className="ourSpecials__item__title">
              {product}
            </h2>
            <h3 className="ourSpecials__item__price">
              {cost}
            </h3>
            {/* <div className="ourSpecials__item__stars">
              <img src="./images/3star.png" alt="3 stars" />
            </div> */}
            <p className="ourSpecials__item__text">
            {text}
			</p>
          </div>
    );
}