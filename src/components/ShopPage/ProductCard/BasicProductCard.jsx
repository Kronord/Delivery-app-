import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux/es/exports';
import { productsInCart } from 'components/Redux/OrderedProducts/productSlice';

function BasicCard({title, img, price, id}) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '200px', marginBottom: '40px' }}>
      <Card.Img variant="top" src={img} style={{width: '200px', height: '200px'}} />
      <Card.Body>
        <Card.Title style={{fontSize: "25px", color: "#1680E9"}}>{title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="contained" onClick={() => dispatch(productsInCart({title, img, count: 1, price, id}))}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;