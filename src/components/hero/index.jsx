import React from 'react'

import { StyledButton } from '../button/style'
import { StyledHeroDiv, StyledHeroText } from './style'

export default function Hero() {
  return (
    <StyledHeroDiv>
      <StyledHeroText>Hyr dina måsten till festen!<br/>Med bara några knapptryck</StyledHeroText>
      <StyledButton href="/tjanster">Se våra tjänster</StyledButton>
    </StyledHeroDiv>
  )
}
