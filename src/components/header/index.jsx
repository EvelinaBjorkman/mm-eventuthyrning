import React, { useState } from 'react';
import Cart from '../cart';
import { StyledHeader, StyledNav } from './style';

export default function Header() {

  let loginStatus = "";

  if(localStorage.getItem("UserToken")) {
    loginStatus = "Logga ut";
  } else {
    loginStatus = "Logga in";
  }

  function handleClick() {
    if(localStorage.getItem("UserToken")) {
      localStorage.clear();
      loginStatus = "Logga in";
      window.location.href = "/";
      
    } else {
      window.location.href = "/login";
      loginStatus = "Logga ut";
    }
  }

  const [cartOpenStatus, setCartOpenStatus] = useState(false);

  function handleCartClick() {
    cartOpenStatus ? setCartOpenStatus(false) : setCartOpenStatus(true);
  }

  document.addEventListener('click', function (e) {
    if(!e.target.classList.contains('sc-hKgILt lpolGI') && !e.target.classList.contains('pointer')) {
      setCartOpenStatus(false);
    }
  });

  return (
    <StyledHeader>
      <a href="/"><h1 className="logoHeader">M&M</h1></a>
      <StyledNav>
        <a href="/produkter">Produkter</a>
        <a href="/tjanster">Tjänster</a>
        <a onClick={handleCartClick} className="pointer">Korg</a>
        {cartOpenStatus ? (<Cart/>) : null }
        <a href="/profil">Profil</a>
        <a onClick={handleClick} >{loginStatus}</a>
      </StyledNav>
    </StyledHeader>
  )
}