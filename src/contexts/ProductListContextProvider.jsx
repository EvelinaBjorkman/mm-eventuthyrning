import React, { createContext, useState } from 'react';

export const ProductListContext = createContext({});

export default function ProductListContextProvider({children}) {

  const [productList, setProductList] = useState([]);

  // const errorList = [
  //   {
  //       "id": "3f6206d2-758c-4676-b39e-804c135fea0d",
  //       "name": "Boombox",
  //       "created": "2021-02-10T15:06:43.839619",
  //       "type": "PRODUCT",
  //       "stock": 4,
  //       "price": 1300,
  //       "categoryName": "Ljud",
  //       "imageUrl": "boombox.jpg"
  //   }
  // ]

  // function getProductList() {
  //   const url = 'https://event-rentals.herokuapp.com/api/product';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setProductList(data.results))
  //   .catch(data => setProductList(errorList));
    
  // }

  // useEffect(() => {
  //   getProductList()
  //   // eslint-disable-next-line
  // }, [])

  return (
    <ProductListContext.Provider value={{productList, setProductList}}>
      {children}
    </ProductListContext.Provider>
  )

} 