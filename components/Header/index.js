import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '../SearchBox';
import AddressModal from '../AddressModal';
import CartModal from '../CartModal';
import { FaCrosshairs, FaShoppingBag } from 'react-icons/fa';


export default function Header() {
  const [ addressModalShow, setAddressModalShow ] = useState(false);
  const [ cartModalShow, setCartModalShow ] = useState(false);

  return (
    <Navbar bg='white' expand='lg' className='border-bottom border-custom-gray'>
      <Navbar.Brand className='mx-3'>
        <Link href='/restaurants'>
          <a>
            <Image
              src='/logo.png'
              alt="OneBitFood"
              width={200}
              height={44}
              className='clickable_effect'
            />
          </a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
        <Nav className='me-lg-4 me-sm-0 py-2 text-center'>
          <span className='clickable_effect' onClick={() => setCartModalShow(true)}>
            <FaShoppingBag className='mb-1'/> Carrinho
          </span>
          <CartModal
            show={cartModalShow}
            onHide={() => setCartModalShow(false)}
            onShow={() => setCartModalShow(true)}
          />
        </Nav>
        <Nav className='py-2 text-center'>
          <span className='clickable_effect' onClick={() => setAddressModalShow(true)}>
            <FaCrosshairs className='mb-1'/> Endereço
          </span>
          <AddressModal
            show={addressModalShow}
            onHide={() => setAddressModalShow(false)}
            onShow={() => setAddressModalShow(true)}
          />
        </Nav>
        <SearchBox/>
      </Navbar.Collapse>
    </Navbar>
  )
}