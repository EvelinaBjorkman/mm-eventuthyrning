import React, { useContext, useEffect } from 'react';

import { CategoryListContext } from '../../contexts/CategoryListContextProvider';

import { StyledLink } from '../link/style';
import { StyledCard } from '../productCard/style';
import { StyledSectionCards } from '../sectionForCards/style';

export default function CategoryList() {

  const { categoryList, setCategoryList } = useContext(CategoryListContext);

  //function to fetch categorylist from database and save in context for global use
  function getCategoryList() {
    const url = 'https://event-rentals.herokuapp.com/api/category';
    fetch(url)
    .then(res => res.json())
    .then(data => setCategoryList(data));
  }

  useEffect(() => {
    getCategoryList();
  }, [])

  return (
    <StyledSectionCards>
      {categoryList && categoryList.map(category => {
        return (
          <StyledLink to={`/produkter/${category.id}`} key={category.id}>
            <StyledCard>
              <img src={`/images/categories/${category.imageUrl}`} style={{width: "100%", maxHeight: "80%"}}/>
              <h2>{category.name}</h2>
            </StyledCard>
          </StyledLink>
        )
      })}
    </StyledSectionCards>
  )
}
