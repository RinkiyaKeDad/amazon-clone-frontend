import React from 'react';
import './Product.css';
import { Grid } from '@material-ui/core';

function Product({ id, title, image, price, rating }) {
  return (
    <Grid container className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt='' />

      <button>Add to Basket</button>
    </Grid>
  );
}

export default Product;
