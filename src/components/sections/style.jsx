import styled from 'styled-components';
import { StandardSection } from '../mixins';

// import * as pallet from '../variables';

export const StandardWrapper = styled.div`
  ${StandardSection};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperDevided = styled.div`
  ${StandardSection};
  margin-top: 200px;
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;


  div {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width: 45%;
  }
`;