import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  width: 400px;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 300px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 0 0 30px;
`;

export const CartPageWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrderedBox = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;
`

export const TotalBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%
    height: 70px;
    margin-top: 50px;
`

export const Text = styled.p`
    font-size: 25px;
    color: #1680E9;
    margin-right: 500px;
`
