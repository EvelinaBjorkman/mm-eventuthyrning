import styled from 'styled-components';

import * as pallet from '../variables';

export const StyledFooter = styled.footer`
  display: flex;
  min-height: 50vh;
  background: ${pallet.colorPop};
  margin-top: 100px;

  div {
    padding: 40px;
    padding-bottom: 100px;
    
    &:nth-child(1) {
      display: flex;
      flex-direction: row;
      min-width: 50%;
      background: ${pallet.colorPopLight};
      color: ${pallet.colorPop};

      ul {
        list-style: none;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      text-align: right;
      color: ${pallet.colorPopLight};
    }
  }

  h1 {
    color: ${pallet.colorPopSecondary};
  }

  a {
    display: block;
    font-size: 25px;
    text-decoration: none;
    color: ${pallet.colorPop};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 25px;
    margin: 0;

    &:nth-child(1) {
      margin-top: 40px;
    }
  }
`;