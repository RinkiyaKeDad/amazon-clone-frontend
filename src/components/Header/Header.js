import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import theme from '../layout/theme';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Hide: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className='header'>
      <img
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        className='header__logo'
      />
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Sign in</span>
        </div>
        <div className='header__option'>
          {' '}
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          {' '}
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__basketCount header__optionLineTwo'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

/*
    <Grid
      className='header'
      justify='space-between'
      alignItems='center'
      container
      xs={12}
    >
      <Grid item>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          className='header__logo'
        />
      </Grid>

      <Grid className='header__search' item xs={6}>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </Grid>

      <Grid item className='header__nav' container xs={2}>
        <Grid className='header__option' item xs={3}>
          <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Sign in</span>
        </Grid>
        <Grid className='header__option' item xs={3}>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </Grid>
        <Grid className='header__option' item xs={3}>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </Grid>
      </Grid>

      <Grid className='header__optionBasket' item xs={2}>
        <ShoppingBasketIcon />
        <span className='header__basketCount header__optionLineTwo'>0</span>
      </Grid>
    </Grid>
    */
