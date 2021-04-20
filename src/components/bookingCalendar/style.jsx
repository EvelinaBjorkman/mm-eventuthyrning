import styled from 'styled-components';

import * as pallet from '../variables';

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const CalendarCard = styled.div`
  display: flex;
  background: ${props => props.bookable ? "#480367" : " #D3D3D3"};
  border: ${props => props.bookable ? "" : "2px solid #AD66D5"};
  border-radius: 10px;
  min-height: 100px;
  align-items: center;
  justify-content: center;

  &.chosen {
    background: ${pallet.colorPopSecondary};
    border: 1px solid ${pallet.colorPop};

    p {
      color: ${pallet.colorPop};
    }
  }

  p {
    margin: 0;
    font-size: 50px;
    color: ${props => props.bookable ? "#FFB520" : "#BFA5CE"};
  }
`;

export const MonthSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h3 {
    margin-left: 40px;
    margin-right: 40px;
  }
`;