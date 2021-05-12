import { Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
import toCurrency from '../../../services/toCurrency';

export default function Details(props) {
  return (
    <>
      <h3 className='fw-bold'>{props.name}</h3>
      <Card className="mt-2 mb-4">
        <Row className="my-3 mx-1">
          <Col md={3} >
            <Image 
              src={props.image_url} 
              alt={props.name}
              width={300}
              height={200}
              layout="responsive"
            />
          </Col>
          <Col md={9}>
            <p><small>{props.description}</small></p>
            <Row className='row-cols-auto'>
              <Col  className="pr-0">
                <small className='border px-3 border-custom-gray fw-bold'>
                  entrega {toCurrency(props.delivery_tax)}
                </small>
              </Col>
              <Col >
                <small className='fw-bold'>{props.category_title}</small>
              </Col>
              <Col >
                <span className='text-custom-orange'>
                  <FaStar/> 5
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}