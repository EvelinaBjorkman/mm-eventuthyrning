import React, { createContext, useState } from 'react';

export const CategoryListContext = createContext({});

export default function CategoryListContextProvider({children}) {
  const [categoryList, setCategoryList] = useState([]);

  return (
    <CategoryListContext.Provider value={{categoryList, setCategoryList}}>
      {children}
    </CategoryListContext.Provider>
  )
}