import { useRecoilState } from 'recoil';
import cartState from '../../store/atoms/cartAtom';
import { Row, Col, Button } from 'react-bootstrap';
import toCurrency from '../../services/toCurrency';
import truncateString from '../../services/truncateString';

export default function Cart(props) {
  const [cart, setCart] = useRecoilState(cartState);

  const subTotal = () => cart.products.reduce(
    (a, b) => a + (parseFloat(b['price']) * parseFloat(b['quantity']) || 0), 0
  );

  const total = () => cart.restaurant.delivery_tax + subTotal();

  const removeProduct = (product) => {
    const new_products = cart.products.filter((p) => p.id != product.id);
    setCart({ restaurant: { ...cart.restaurant }, products: new_products })
  }

  if (cart.products.length <= 0)
    return <p>Carrinho vázio</p>

  return (
    <>
      <h5 className='fw-bolder'>{cart.restaurant.name}</h5>
      <hr />
      {cart.products.map((product, i) =>
        <div key={product.id} className="mb-4" key={i}>
          <Row>
            <Col md={8} xs={8}>
              <small className='fw-bolder'>{product.quantity}x {product.name}</small>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <small >
                {toCurrency(product.price)}
              </small>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={8} xs={8}>
              <p><small>{truncateString(product.description, 40)}</small></p>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <Button
                size="sm"
                variant="outline-dark"
                onClick={() => removeProduct(product)}
                className='border px-1 border-custom-gray'
              >
                Remover
                </Button>
            </Col>
          </Row>
        </div>
      )}
      <hr />
      <Row className="mt-4">
        <Col md={8} xs={8}>
          <p>Subototal</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p>{toCurrency(subTotal())}</p>
        </Col>
      </Row>
      <Row className="mt-n2">
        <Col md={8} xs={8}>
          <p>Taxa de entrega</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p>{toCurrency(cart.restaurant.delivery_tax)}</p>
        </Col>
        <hr />
      </Row>
      <Row className="mb-4">
        <Col md={8} xs={8}>
          <p className='fw-bolder'>Total</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p className='fw-bolder'>{toCurrency(total())}</p>
        </Col>
      </Row>
    </>
  )
}