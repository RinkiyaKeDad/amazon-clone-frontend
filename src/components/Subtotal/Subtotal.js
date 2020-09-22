import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { Grid } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue(); //destructuring basket from state can also do state.basket
  console.log(basket);
  let sum = 0;
  basket.map(product => (sum = sum + product.price));
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): ₹<strong>{sum}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
