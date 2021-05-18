import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ProductListContext } from '../../contexts/ProductListContextProvider';

import { StyledLink } from '../link/style';
import { StyledCard } from '../productCard/style';
import { StyledSectionCards } from '../sectionForCards/style'

export default function ProductList({category}) {
  const location = useLocation();
  let id = "";

  const {productList, setProductList} = useContext(ProductListContext);

  function getProductList() {
    const url = `https://event-rentals.herokuapp.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProductList(data.products));
  }

  function getId(str) {
    id = str.split('/')[2];
  }

  function getProducts() {
    if (Object.keys(category).length == 0) {
      getProductList();
    }
  }

  useEffect(() => {
    getId(location.pathname);
    getProducts();
  }, [])

  return (
    <StyledSectionCards>
      {productList && productList.map(product => {
        return (
          <StyledLink to={`/produkt/${product.id}`} key={product.id}>
            <StyledCard>
              <img src={`/images/products/${product.categoryName}/${product.imageUrl}`} style={{width: "100%", maxHeight: "80%"}}/>
              <h2>{product.name}</h2>
            </StyledCard>
          </StyledLink>
        )
      })}
    </StyledSectionCards>
  )
}
