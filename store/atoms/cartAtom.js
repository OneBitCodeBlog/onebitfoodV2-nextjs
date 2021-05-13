import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const cartState = atom({
  key: 'cartState',
  default: {restaurant: {}, products: []}, 
  effects_UNSTABLE: [persistAtom]
});

export default cartState;