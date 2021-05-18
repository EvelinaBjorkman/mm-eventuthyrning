import React, { createContext, useState } from 'react';

export const ProductListContext = createContext({});

export default function ProductListContextProvider({children}) {

  const [productList, setProductList] = useState([]);

  return (
    <ProductListContext.Provider value={{productList, setProductList}}>
      {children}
    </ProductListContext.Provider>
  )

} 