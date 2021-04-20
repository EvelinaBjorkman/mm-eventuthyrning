import React, { createContext, useState } from 'react';

export const CartListContext = createContext({});

export default function CartListContextProvider({children}) {
  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("CartList")));

  return (
    <CartListContext.Provider value={{cartList, setCartList}}>
      {children}
    </CartListContext.Provider>
  )
}