import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryListContext } from '../../contexts/CategoryListContextProvider';
import { StyledFooter } from './style';

export default function Footer() {

  const { categoryList } = useContext(CategoryListContext);

  return (
    <StyledFooter>
      <div>
        <ul>
          <li><h3>Våra tjänster</h3></li>
          <li><Link to="/tjanster">Leverans</Link></li>
          <li><Link to="/tjanster">Montering</Link></li>
          <li><Link to="/tjanster">Städning</Link></li>
        </ul>
        <ul>
          <li><h3>Våra produkter</h3></li>
          {categoryList && categoryList.map(category => {
            return (
              <li key={category.id}><Link to={`/produkter/${category.id}`}>{category.name}</Link></li>
            )
          })}
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
