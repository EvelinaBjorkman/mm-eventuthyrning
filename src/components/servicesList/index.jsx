import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faTools, faTruck } from '@fortawesome/free-solid-svg-icons';
import { colorPop, colorPopLight, colorPopSecondary } from '../variables';
import { ServiceItem, ServiceSection } from './style';
import { StyledH2 } from '../typografy';

export default function ServicesList() {
  return (
    <ServiceSection>
      <ServiceItem>
        <FontAwesomeIcon icon={faTruck} size="9x" color={colorPop}></FontAwesomeIcon>
        <div>
          <StyledH2>Leverans</StyledH2>
          <p>Oavsätt om du har en liten discokula i din beställning eller tält, bort och stolar för 200 personer så kan vi hjälpa din med att leverera och hämta upp din beställning.</p>
          <p>Pris för frakt tillkommer.</p>
        </div>
      </ServiceItem>
      <ServiceItem>
        <FontAwesomeIcon icon={faTools} size="9x" color={colorPopLight}></FontAwesomeIcon>
        <div>
          <StyledH2>Montering</StyledH2>
          <p>Att sätt upp tält kan vara svårt, vi hjälper dig! Både att bygga upp och att ta ner.</p>
          <p>Pris för montering tillkommer.</p>
        </div>
      </ServiceItem>
      <ServiceItem>
        <FontAwesomeIcon icon={faHandSparkles} size="9x" color={colorPopSecondary}></FontAwesomeIcon> 
        <div>
          <StyledH2>Städning</StyledH2>
          <p>Efter en fest så blir det alltid lite skitigt. Om du välje till städning till ditt evenemang så fixar vi allt det där trågiga dagen efter.</p>
          <p>Pris för städning tillkommer.</p>
        </div>
      </ServiceItem>
    </ServiceSection>
  )
}
