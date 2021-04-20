import React from 'react'
import { StyledH2 } from '../typografy';
import { StyledImgWrapper, StyledProductInfoWrapper, StyledSection } from './style';

export default function DescribedProduct({product}) {
  return (
    <StyledSection>
      <StyledImgWrapper>
        <img src={`/images/products/${product.categoryName}/${product.imageUrl}`}/>
      </StyledImgWrapper>
      <StyledProductInfoWrapper>
        <StyledH2>{product.name}</StyledH2>
        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        <p><b>{product.price}:-</b> / dag</p>
      </StyledProductInfoWrapper>
    </StyledSection>
  )
}
