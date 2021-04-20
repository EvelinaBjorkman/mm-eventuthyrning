import styled from 'styled-components';
import * as pallet from '../variables';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 15px;
    font-size: 18px;
    padding: 6px;
    border: none;
    border-bottom: 2px solid black;

    ::placeholder {
      color: ${pallet.colorPopMuted};
    }
  }

`;