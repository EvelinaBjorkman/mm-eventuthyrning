import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/productList/ProductList';
import { SytledH1 } from '../components/typografy';

export default function ProductListPage() {
  let id = "";
  const location = useLocation();

  const [ category, setCategory ] = useState({});

  function getCategory() {
    const url = `https://event-rentals.herokuapp.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setCategory(data));
  }

  function getId(str) {
    id = str.split('/')[2];
  }

  useEffect(() => {
    getId(location.pathname);
    getCategory();
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <SytledH1>{category.category && category.category.name}</SytledH1>
      <ProductList category={category}/>
    </div>
  )
}
