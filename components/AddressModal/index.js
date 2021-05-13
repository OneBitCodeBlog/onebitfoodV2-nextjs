import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormAddress from './FormAddress';
import { useRecoilState } from 'recoil';
import addressState from '../../store/atoms/addressAtom';
import { useRouter } from 'next/router';

export default function AddressModal(props) {
  const [address, setAddress] = useRecoilState(addressState)
  const router = useRouter();

  useEffect(() => {
    if(router.asPath != '/' && address.city == '')
      props.onShow();
  }, [router])

  return(
    <Modal
      show={props.show}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
      keybord={false}
    >
      <Modal.Header>
        <h5 className='fw-bold mt-2'>Endereço de entrega</h5>
      </Modal.Header>
      <Modal.Body>
        <FormAddress
          onHide={() => props.onHide()}
        />
      </Modal.Body>
    </Modal>
  )
}