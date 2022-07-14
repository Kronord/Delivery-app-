import React from 'react';
import { Outlet } from 'react-router';
import { Wrapper, Nav } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
    <Wrapper>
      <Nav to="/">Shop</Nav>
      <Nav to="/cart">Shopping Cart</Nav>
    </Wrapper>
    <Outlet/>
    </>
  );
};

export default AppBar;
