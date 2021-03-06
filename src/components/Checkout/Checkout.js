import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { Grid } from '@material-ui/core';
import CheckoutProduct from '../ProductCheckout/CheckoutProduct';
import { useStateValue } from '../../context/StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue(); //destructuring basket from state can also do state.basket

  return (
    <Grid container className='checkout'>
      <Grid item xs={12} sm={9} className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h3 style={{ marginLeft: '10px' }}>
            Hello {user ? user.email : 'Guest, Please Sign In!'}
          </h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </Grid>

      <Grid item xs={12} sm={3} className='checkout__right'>
        <Subtotal />
      </Grid>
    </Grid>
  );
}

export default Checkout;
