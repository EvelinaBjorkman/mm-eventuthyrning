import React from 'react';
import { StyledButton } from '../components/button/style';
import { StandardWrapper } from '../components/sections/style';
import { SytledH1 } from '../components/typografy';

export default function SuccessPage() {
  return (
    <div>
      <StandardWrapper>
        <SytledH1>Tack för din beställning!</SytledH1>
        <StyledButton href="/profil">Till mina bokningar</StyledButton>
      </StandardWrapper>
    </div>
  )
}
