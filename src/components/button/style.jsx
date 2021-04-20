import styled from 'styled-components';
import { shadow } from '../mixins';

import * as pallet from '../variables';

export const StyledButton = styled.a`
  background: ${pallet.colorPopSecondary};
  color: black;
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  padding: 15px 30px;
  min-width: 200px;
  max-width: fit-content;
  ${shadow};
  transition: box-shadow .3s;

  &:hover {
    font-weight: bold;
  }

  &:active {
    box-shadow: none;
  }
` ;

export const StyledButtonMini = styled(StyledButton)`
  padding: 10px 20px;
  min-width: 100px;
  font-size: 18px;
`;

// export const StyledButtonTest = styled.a`
//   background: ${pallet.colorPopSecondary};
//   color: black;
//   text-decoration: none;
//   text-align: center;
//   border: none;
//   border-radius: 50px;
//   font-size: 20px;
//   padding: 15px 30px;
//   min-width: 100px;
//   max-width: fit-content;
//   ${shadow};

// `;