import styled from 'styled-components';
import { shadow } from '../mixins';

export const CheckoutCartCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  //max-height: 170px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  ${shadow};

  div {
    text-align: right;
  }

  img {
    max-width: 30%;
    object-fit: contain;
    max-height: 100%;
  }
`;