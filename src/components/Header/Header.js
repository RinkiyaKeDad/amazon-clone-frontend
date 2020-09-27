import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import theme from '../ThemeStuff/theme';
import { useStateValue } from '../../context/StateProvider';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const useStyles = makeStyles({
  Hide: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

function Header() {
  const [state, dispatch] = useStateValue();

  const classes = useStyles();
  const handleAuthenticaton = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          className='header__logo'
        />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link style={{ textDecoration: 'none' }} to={!state.user && '/login'}>
          <div onClick={handleAuthenticaton} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {state.user ? state.user?.email.split('@')[0] : 'Guest'}
              {console.log(state.user)}
            </span>
            <span className='header__optionLineTwo'>
              {state.user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
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
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__basketCount header__optionLineTwo'>
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
