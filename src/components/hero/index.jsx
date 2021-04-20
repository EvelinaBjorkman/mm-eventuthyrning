import React from 'react'
import { StyledButton } from '../button/style'
import { StyledHeroDiv, StyledHeroText } from './style'

export default function Hero() {
  return (
    <StyledHeroDiv>
      <StyledHeroText>Detta är en text för att sälja in företaget</StyledHeroText>
      <StyledButton href="/tjanster">Se våra tjänster</StyledButton>
    </StyledHeroDiv>
  )
}
