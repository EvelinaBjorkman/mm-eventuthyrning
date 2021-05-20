import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1100px;
  min-height: 55vh;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const StyledImgWrapper = styled.div`
   width: 50%;
   max-height: 300px;

   img {
     width: 100%;
    max-height: 300px;
    object-fit: contain;
   }
`;

export const StyledProductInfoWrapper = styled.div`
  width: 40%;
`;

