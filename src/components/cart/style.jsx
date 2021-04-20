import styled from 'styled-components';

import * as pallet from '../variables';
import { shadow } from '../mixins';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  // height: 100vh;
  position: fixed;
  top: 88px;
  left: auto;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: white;
  border: 3px solid ${pallet.colorPop};
  padding-bottom: 50px;

  

  
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  text-align: right;
  ${shadow};

  div:first-child {
    display: flex;
    flex-direction: column;
    // text-align: right;
  }

  img {
    max-width: 30%;
    object-fit: contain;
  }
`;



export const QtyDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  svg {
    margin: 10px;
  }

`;