import styled from 'styled-components';
import { shadow } from '../mixins';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 300px;
  height: 400px;
  text-align: center;
  border-radius: 25px;
  ${shadow}

  // img {
  //   border-radius: 25px;
  //   ${shadow}
  // }
`;