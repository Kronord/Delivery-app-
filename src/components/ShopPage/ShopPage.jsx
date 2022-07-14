import React from 'react';
import BasicCard from './ProductCard/BasicProductCard';
import { useGetProductsQuery } from 'components/Redux/AllProducts/productsApi';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Wrapper, GalleryBox, ShopsBox, ShopsList, Item, Text } from './ShopPage.styled';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1680E9"
    }
  }
});

const ShopPage = () => {
  const {data, error, isFetching} = useGetProductsQuery('');
  return (
    <Wrapper>
      <ShopsBox>
        <Text>Shops:</Text>
        <ShopsList>
          <ThemeProvider theme={theme}>
          <Item><Button variant='outlined' size='large'>Prod-Market</Button></Item>
          <Item><Button variant='outlined' size='large'>Smart-shop</Button></Item>
          <Item><Button variant='outlined' size='large'>Comfy</Button></Item>
          <Item><Button variant='outlined' size='large'>Burger-Shot</Button></Item>
          <Item><Button variant='outlined' size='large'>Pizza-House</Button></Item>
          <Item><Button variant='outlined' size='large'>Sushi-master</Button></Item>
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
