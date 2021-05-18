import styled from 'styled-components';
import { shadow } from '../mixins';


export const StyledProfileRentalCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //max-height: 170px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  ${shadow};

  img {
    max-width: 50%;
    object-fit: contain;
    max-height: 100%;
  }
`;

export const StyledProfileProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-height: 150px;
  }
`;