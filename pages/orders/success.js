import { Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function Success() {
  return(
    <Row className='mt-4 justify-content-md-center'>
      <Col md={4}>
        <Card className='mt-4 p-4'>
          <h4 className='fw-bold'>Pedido a caminho</h4>
          <p className='mt-2'>Em breve você receberá sua comida em casa!</p>

          <Row className='mt-y justify-content-md-center'>
            <Col md={10}>
              <Image
                src='/status-ok.png'
                alt='Sucesso no pedido'
                width={100}
                height={100}
                layout='responsive'
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}