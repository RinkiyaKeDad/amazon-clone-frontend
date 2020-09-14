import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { Grid } from '@material-ui/core';

function Checkout() {
  return (
    <Grid container xs={12} className='checkout'>
      <Grid item xs={12} sm={9} className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
        </div>
      </Grid>

      <Grid item xs={12} sm={3} className='checkout__right'>
        <Subtotal />
      </Grid>
    </Grid>
  );
}

export default Checkout;
