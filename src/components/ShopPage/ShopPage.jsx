import React from 'react';
import BasicCard from './ProductCard/BasicProductCard';
import { useGetProductsQuery } from 'components/Redux/AllProducts/productsApi';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Wrapper, GalleryBox, ShopsBox, ShopsList, Item, Text, Btn } from './ShopPage.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1680E9"
    }
  }
});

const ShopPage = () => {
  const [endpoint, setEndpoint] = useState('products');
  const  products = useSelector(state => state.orderedProducts.products);
  const {data} = useGetProductsQuery(endpoint);
  
  return (
    <Wrapper>
      <ShopsBox>
        <Text>Shops:</Text>
        <ShopsList>
          <ThemeProvider theme={theme}>
          <Item><Btn variant='outlined' size='large' disabled={products.length === 0 ? false : true} onClick={() => setEndpoint('products')}>Prod-Market</Btn></Item>
          <Item><Btn variant='outlined' size='large' disabled={products.length === 0 ? false : true} onClick={() => setEndpoint('mcDonalds')}>McDonalds</Btn></Item>
          <Item><Btn variant='outlined' size='large' disabled={products.length === 0 ? false : true} onClick={() => setEndpoint('kfc')}>KFC</Btn></Item>
          <Item><Btn variant='outlined' size='large' disabled={products.length === 0 ? false : true} onClick={() => setEndpoint('pizza')}>Pizza-House</Btn></Item>
          <Item><Btn variant='outlined' size='large' disabled={products.length === 0 ? false : true} onClick={() => setEndpoint('sushiya')}>Sushiya</Btn></Item>
          </ThemeProvider>
        </ShopsList>
      </ShopsBox>
      <GalleryBox>
        {data && data.map(el => <BasicCard key={el._id} title={el.title} img={el.image} price={el.price} id={el._id}/>)}
      </GalleryBox>
    </Wrapper>
  );
};

export default ShopPage;
