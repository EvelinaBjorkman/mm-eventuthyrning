import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import DescribedProduct from '../components/describedProduct';
import BookingCalendar from '../components/bookingCalendar';

export default function ProductDetailPage() {

  let id ="";

  const location = useLocation();

  const [ product, setProduct ] = useState({});

  function getProductList() {
    const url = `https://event-rentals.herokuapp.com/api/product/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data));
  }

  function getId(str) {
    id = str.split('/')[2];
  }

  getId(location.pathname);

  function getProduct() {
    getId(location.pathname);

    
    //check if product is fetched, else fetch product
    if(Object.keys(product).length === 0) {
      getProductList();
    }
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <DescribedProduct product={product}/>
      <BookingCalendar product={product}/>
    </div>
  )
}
