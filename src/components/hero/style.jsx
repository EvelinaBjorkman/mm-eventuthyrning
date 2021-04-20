import styled from 'styled-components';
import { colorPop } from '../variables';

// import heroImg from '/images/'

export const StyledHeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  // background: pink;
  background-image: url("/images/konfetti.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 90vh;
    width: 100%;
    background: ${colorPop};
    opacity: 0.7;
  }

  a {
    z-index: 1;
  }
`;

export const StyledHeroText = styled.p`
  max-width: 40vw;
  font-size: 40px;
  text-align: center;
  color: white;
  z-index: 1;
`;