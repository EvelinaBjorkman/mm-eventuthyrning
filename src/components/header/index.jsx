import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      window.location.href = "/mm-eventuthyrning";
      
    } else {
      window.location.href = "/mm-eventuthyrning/login";
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
      <Link to="/"><h1 className="logoHeader">M&M</h1></Link>
      <StyledNav>
        <Link to="/produkter">Produkter</Link>
        {/* <a href="/produkter">Produkter</a> */}
        <Link to="/tjanster">Tjänster</Link>
        {/* <a href="/tjanster">Tjänster</a> */}
        <a onClick={handleCartClick} className="pointer">Korg</a>
        {cartOpenStatus ? (<Cart/>) : null }
        <Link to="/profil">Profil</Link>
        {/* <a href="/profil">Profil</a> */}
        <a onClick={handleClick} >{loginStatus}</a>
      </StyledNav>
    </StyledHeader>
  )
}