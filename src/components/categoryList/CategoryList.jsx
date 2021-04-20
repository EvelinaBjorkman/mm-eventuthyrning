import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { CategoryListContext } from '../../contexts/CategoryListContextProvider';
import { StyledLink } from '../link/style';
import { StyledCard } from '../productCard/style';
import { StyledSectionCards } from '../sectionForCards/style';

export default function CategoryList() {

  const { categoryList, setCategoryList } = useContext(CategoryListContext);

  // const errorList = [
  //   {
  //       "id": "6fae384a-3825-45aa-a8fd-32f08db072ec",
  //       "name": "Tält",
  //       "imageUrl": "tent.png",
  //       "created": "2021-02-10T11:44:25.25683"
  //   },
  //   {
  //       "id": "9c05c97d-825a-4f2e-9d5d-963ffca55627",
  //       "name": "Bord & Stolar",
  //       "imageUrl": "dining.jpg",
  //       "created": "2021-02-10T11:47:58.661335"
  //   },
  //   {
  //       "id": "dc4c7c4d-9c82-43d4-9d76-b98f60f73b27",
  //       "name": "Ljud",
  //       "imageUrl": "sound.png",
  //       "created": "2021-02-10T11:50:37.42441"
  //   },
  //   {
  //       "id": "068d595d-10c1-4d55-ab3c-19059c37624e",
  //       "name": "Ljus",
  //       "imageUrl": "lights.jpg",
  //       "created": "2021-02-10T11:54:41.318862"
  //   },
  //   {
  //       "id": "068d595d-10c1-4d55-ab3c-19059c37624f",
  //       "name": "Skräp",
  //       "imageUrl": "garbage.jpg",
  //       "created": "2021-02-10T11:54:41.318862"
  //   },
  //   {
  //       "id": "8c9a0991-2111-498e-851d-94fd42eacab5",
  //       "name": "Aktiviteter & Spel",
  //       "imageUrl": "games.jpg",
  //       "created": "2021-02-10T12:02:10.153356"
  //   },
  //   {
  //       "id": "e8c27e7c-e2a5-4030-8596-819a47cf7fe5",
  //       "name": "Mat & Dryck",
  //       "imageUrl": "food.png",
  //       "created": "2021-02-10T12:04:56.121228"
  //   },
  //   {
  //       "id": "3de4c66c-b54c-4a76-8561-6548c64f7068",
  //       "name": "Inredning och dekorationer",
  //       "imageUrl": "decor.jpg",
  //       "created": "2021-02-10T12:08:42.611122"
  //   }
  // ]

  function getCategoryList() {
    const url = 'https://event-rentals.herokuapp.com/api/category';
    fetch(url)
    .then(res => res.json())
    .then(data => setCategoryList(data));
    
    // .catch(data => setCategoryList(errorList));
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
