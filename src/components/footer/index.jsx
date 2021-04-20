import React, { useContext } from 'react';
import { CategoryListContext } from '../../contexts/CategoryListContextProvider';
import { StyledFooter } from './style';

export default function Footer() {

  const { categoryList } = useContext(CategoryListContext);

  return (
    <StyledFooter>
      <div>
        <ul>
          <li><h3>Våra tjänster</h3></li>
          <li><a>Tjänst</a></li>
          <li><a>Tjänst</a></li>
          <li><a>Tjänst</a></li>
          <li><a>Tjänst</a></li>
        </ul>
        <ul>
          <li><h3>Våra produkter</h3></li>
          {/* {categoryList.map(category => {
            return (
              <li key={category.id}><a>{category.name}</a></li>
            )
          })} */}
        </ul>
        <ul>
          <li><h3>Om oss</h3></li>
          <li><a>Om oss</a></li>
          <li><a>Om oss</a></li>
          <li><a>Om oss</a></li>
        </ul>
      </div>
      <div>
        <h1 className="logoFooter">M&M</h1>
        <a>evelina.v.bjorkman@gmail.com</a>
        <a>073-687 70 82</a>
        <p>Korpmossev. 58</p>
        <p>126 38 Hägersten</p>
      </div>
    </StyledFooter>
  )
}
