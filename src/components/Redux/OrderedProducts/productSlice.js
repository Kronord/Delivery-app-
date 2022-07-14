import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'orderedProducts',
  initialState: { products: [] },
  reducers: {
    productsInCart: ({ products }, { payload }) => {
      const obj = products.find(el => el.title === payload.title);
      if (obj) {
        obj.count += 1;
        return;
      }
      products.push(payload); 
    },
    increment: ({products}, {payload}) => {
      const obj = products.find(el => el.title === payload.title);
      if (obj) {
        obj.count += 1;
        return;
      }
    },
    decrement: ({products}, {payload}) => {
      const obj = products.find(el => el.title === payload.title);
      if (payload.count === 1) {
        products.splice(products.indexOf(obj), 1);
      };
      if (obj) {
        obj.count -= 1;
        return;
      }
    },
    emptyCart: ({products}) => {
      products.splice(0);
    },
  },
});

export const { productsInCart, increment, decrement, emptyCart } = productSlice.actions;

export default productSlice.reducer;
