import React from 'react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useAddUserMutation } from 'components/Redux/Users/UsersApi';
import { emptyCart } from 'components/Redux/OrderedProducts/productSlice';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import {
  Wrapper,
  SubmitButton,
  Title,
  CartPageWrap,
  OrderedBox,
  TotalBox,
  Text,
} from './CartPage.styled';
import { useSelector } from 'react-redux';
import CounterProductCard from 'components/ShopPage/ProductCard/CounterProductCard';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup.string('Enter your phone').required('Phone is required'),
  address: yup.string('Enter your address').required('Address is required'),
});

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector(state => state.orderedProducts.products);
  const [addUser] = useAddUserMutation();
  useEffect(() => {
    setTotal(products.reduce((prev, {count, price}) => {
      return prev + count * price;
    }, 0))
  }, [products, total])
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log({...values, order: [{products, total}]});
      actions.resetForm();
      dispatch(emptyCart());
      addUser({...values, order: [{products, total}]});
    },
  });
  return (
    <>
      <CartPageWrap>
        
        <Wrapper>
          <Title>Enter your details</Title>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              margin="normal"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              margin="normal"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <SubmitButton
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </SubmitButton>
          </form>
        </Wrapper>
        <OrderedBox>
          {products &&
            products.map(el => (
              <CounterProductCard
                key={el.id}
                title={el.title}
                img={el.img}
                count={el.count}
                price={el.price}
              />
            ))}
        </OrderedBox>
      </CartPageWrap>
      <TotalBox>
        <Text>Total: {total}</Text>
      </TotalBox>
    </>
  );
};

export default CartPage;
