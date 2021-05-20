import React, { useState, useEffect } from 'react'

import { StyledButtonMini } from '../components/button/style'
import { StyledForm } from '../components/form/style'
import { WrapperDevided } from '../components/sections/style'

export default function LoginPage() {

  const [registerName, setRegisterName] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [token, setToken] = useState(localStorage.getItem("UserToken") || "");

  function saveTokenInLocalStorage(token) {
    localStorage.setItem('UserToken', token);
  }

  function handleRegister() {
    const payload = {
      "fullName": registerName,
      "phone": registerPhone,
      "email": registerEmail,
      "password": registerPassword
    }

    const url = "https://event-rentals.herokuapp.com/api/user/register";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(() => window.location.href = "/mm-eventuthyrning/profil");
  }

  function handleLogin() {
    const payload = {
      "email": loginEmail,
      "password": loginPassword
    }

    const url = "https://event-rentals.herokuapp.com/api/auth/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => setToken(data.jwt))
    .then(() => window.location.href = "/mm-eventuthyrning/profil");
  }

  useEffect(() => {
    saveTokenInLocalStorage(token);
  }, [token])

  return (
    <WrapperDevided>
      <div>
        <h3>Logga in:</h3>
        <StyledForm>
          <input type="email" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value) } />
          <input type="text" placeholder="Lösenord" onChange={(e) => setLoginPassword(e.target.value)} />
          <StyledButtonMini onClick={handleLogin} >Logga In</StyledButtonMini>
        </StyledForm>
      </div>
      <div>
        <h3>Är du ny här?</h3>
        <h4>Registrera dig för att kunna boka våra varor och se dina bokningar!</h4>
        <StyledForm>
          <input type="text" placeholder="Förnamn & Efternamn" onChange={(e) => setRegisterName(e.target.value)} />
          <input type="text" placeholder="Telefonnr." onChange={(e) => setRegisterPhone(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
          <input type="text" placeholder="Lösenord" onChange={(e) => setRegisterPassword(e.target.value)} />
          <StyledButtonMini onClick={handleRegister}>Skapa</StyledButtonMini>
        </StyledForm>
      </div>
    </WrapperDevided>
  )
}
