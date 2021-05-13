import { Row, Col, Card } from 'react-bootstrap';
import OrderForm from './OrderForm';
import Cart from '../Cart';

export default function NewOrder() {
  return(
    <>
      <Row className='justify-content-md-center'>
        <Col md={{span: 4}}>
          <Card className='p-5 mb-4'>
            <Cart/>
          </Card>
        </Col>
        <Col md={{span: 4}}>
          <Card className='p-5 mb-4'>
            <OrderForm/>
          </Card>
        </Col>
      </Row>
    </>
  )
}