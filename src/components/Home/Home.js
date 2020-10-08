import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import { Grid } from '@material-ui/core';

function Home() {
  return (
    <Grid container>
      <Grid style={{ zIndex: '-1' }} item xs={12}>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
      </Grid>
      <Grid item xs={1} />
      <Grid
        container
        item
        xs={10}
        className='home__container'
        justify='space-between'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Product
            id='12321341'
            title='Redgear MP35 Speed-Type Gaming Mousepad (Black/Red)'
            price={299}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61G5-hNFMYL._SL1000_.jpg'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Product
            id='49538094'
            title='ASUS ROG Zephyrus G14, 14" FHD 120Hz, Ryzen 5 4600HS, GTX 1650 4GB GDDR6 Graphics, Gaming Laptop'
            price={84000}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81i1XE-J04L._SL1500_.jpg'
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Product
            id='4903850'
            title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen"
            price={2300}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={3500}
            rating={5}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={85000}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          />
        </Grid>

        <Grid item sm={12}>
          <Product
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={40000}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
          />
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

export default Home;
