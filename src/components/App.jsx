import AppBar from "./AppBar/AppBar";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";
import { Route, Routes } from "react-router";
import { GeneralWrap } from "./App.styled";

export const App = () => {
  return (
    <GeneralWrap>
    <Routes>
      <Route path="/" element={<AppBar/>}>
        <Route index element={<ShopPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Route>
    </Routes>
    </GeneralWrap>
  );
};
