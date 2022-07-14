import { decrement, increment } from 'components/Redux/OrderedProducts/productSlice';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux/es/exports';
import { CountWrap, Count, BtnGroup, Btn } from './ProductCard.styled';
import { MdAddCircleOutline } from "react-icons/md";
import {MdRemoveCircleOutline} from "react-icons/md";

function CounterProductCard({ title, img, count, price }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '200px', marginBottom: '40px', display: 'flex'}}>
      <Card.Img
        variant="top"
        src={img}
        style={{ width: '200px', height: '200px' }}
      />
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '100px'}}>
        <Card.Title style={{ fontSize: '20px', color: '#1680E9' }}>
          {title}
        </Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        <CountWrap>
          <Count>{count}</Count>
          <BtnGroup>
          <Btn type="button" variant="contained" size="small" onClick={() => dispatch(increment({title, count}))}><MdAddCircleOutline style={{color: "#fff", width: "20px", height: "20px"}}/></Btn>
          <Btn type="button" variant="contained" size="small" onClick={() => dispatch(decrement({title, count}))}><MdRemoveCircleOutline style={{color: "#fff", width: "20px", height: "20px"}}/></Btn>
          </BtnGroup>
        </CountWrap>
      </Card.Body>
    </Card>
  );
}

export default CounterProductCard;
