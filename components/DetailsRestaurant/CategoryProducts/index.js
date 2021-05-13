import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image'
import toCurrency from '../../../services/toCurrency';
import truncateString from '../../../services/truncateString';
import AddProductModal from '../../AddProductModal';

export default function CategoryProducts(props) {
  const [productSelect, setProductSelected] = useState(null);

  return(
    <>

      <h5 className='fw-bold'>{props.title}</h5>
      <Row>
        {props.products.map((product, i) =>
          <Col md={6} sm={12} key={i}>
            <Card className="mb-4 clickable_effect" onClick={() => setProductSelected(product)}>
              <Row className="my-3 mx-1">
                <Col md={6} xs={{span: 12, order: 2 }}>
                  <p className='fw-bold mb-0'>{product.name}</p>
                  <p><small>{truncateString(product.description, 80)}</small></p>
                  <small className='border px-3 border-custom-gray fw-bold'>
                    {toCurrency(product.price)}
                  </small>
                </Col>

                <Col md={6} xs={{span: 12, order: 1 }} >
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        )}
      </Row>
      <AddProductModal
        show={productSelect != null}
        onHide={() => setProductSelected(null)}
        product={productSelect}
        restaurant={props.restaurant}
      />
    </>
  )
}