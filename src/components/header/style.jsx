import styled from 'styled-components';

import * as pallet from '../variables';
import { postitionFixed } from '../mixins';

export const StyledHeader = styled.header`
  ${postitionFixed(0, 0, 0, 'auto')};
  background: ${pallet.colorPop}; 
  //width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  h1 {
    color: ${pallet.colorPopSecondary}
  }

  a {
    color: white;
  }
`;

export const StyledNav = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 40vw;
  display: flex;
  flex-dirextion: row;
  justify-content: space-between;

  @media only screen and (min-width: 1290px) {
    width: 30vw;
  }
`;
