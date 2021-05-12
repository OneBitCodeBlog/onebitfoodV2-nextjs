import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const addressState = atom({
  key: 'addressState',
  default: {
    city: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: ''
  }, 
  effects_UNSTABLE: [persistAtom]
});

export default addressState;