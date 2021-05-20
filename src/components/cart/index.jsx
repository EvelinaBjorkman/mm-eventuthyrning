import React, { useState, useEffect, useContext } from 'react';
import { StyledButtonMini } from '../button/style';
import { CartCard, CartWrapper, QtyDiv } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartListContext } from '../../contexts/CartListContextProvider';

export default function Cart() {

  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("CartList")));

  window.addEventListener("storage", () => {
    setCartList(JSON.parse(localStorage.getItem("CartList")));
  })

  function handleDelete(product) {
    const newCartList = cartList.filter(item => item.product.id !== product.id)
    setCartList(newCartList);
    localStorage.setItem("CartList", JSON.stringify(newCartList));
  }

  function handlePlus(product, qty) {
    let newQty = parseInt(qty) + 1;
    const foundProduct = cartList.find(item => item.product.id == product.id);
    if (newQty <= product.stock) {
      foundProduct.chosenQty = newQty;
      setCartList([...cartList]);
      localStorage.setItem("CartList", JSON.stringify(cartList));
    } else {
      alert("Det finns inte flera av denna varan")
    }
  }

  function handleMinus(product, qty) {
    let newQty = parseInt(qty) - 1;
    if (newQty === 0) {
      handleDelete(product);
    } else {
      const foundProduct = cartList.find(item => item.product.id == product.id);
      foundProduct.chosenQty = newQty;
      setCartList([...cartList]);
      localStorage.setItem("CartList", JSON.stringify(cartList));
    }
  }

  useEffect(() => {
    setCartList(localStorage.getItem("CartList") ? JSON.parse(localStorage.getItem("CartList")) : []);
    window.addEventListener("storage", () => {
      setCartList(JSON.parse(localStorage.getItem("CartList")));
    })
    //eslint-disable-next-line
  }, []);

  return (
    <CartWrapper>
      <div>
        {cartList && cartList.map(product => {
          return(
            <CartCard key={product.product.id}>
              <img src={`../images/products/${product.product.categoryName}/${product.product.imageUrl}`} />
              <div>
                <FontAwesomeIcon icon={faTimes} onClick={() => handleDelete(product.product)} className="pointer"></FontAwesomeIcon>
                <p>{product.product.name}</p>
                <QtyDiv>
                  <FontAwesomeIcon icon={faMinus} onClick={() => handleMinus(product.product, product.chosenQty)} className="pointer"></FontAwesomeIcon>
                  <p>{product.chosenQty}st</p>
                  <FontAwesomeIcon icon={faPlus} onClick={() => handlePlus(product.product, product.chosenQty)} className="pointer"></FontAwesomeIcon>
                </QtyDiv>
              </div>
            </CartCard>
          )
        })}
      </div>
      <StyledButtonMini to="/kassa">Till kassan</StyledButtonMini>
    </CartWrapper>
  )
}
