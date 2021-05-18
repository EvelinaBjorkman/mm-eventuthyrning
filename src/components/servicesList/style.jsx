import styled from 'styled-components';

export const ServiceSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
 
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  p {
    margin: 0;
    max-width: 35vw;
  }
`;