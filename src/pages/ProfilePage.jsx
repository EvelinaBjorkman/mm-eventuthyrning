import React, { useState, useEffect } from 'react'
import { StyledButton } from '../components/button/style';
import { StyledProfileProductsWrapper, StyledProfileRentalCard } from '../components/profileRentalsCard/style';
import { StandardWrapper, WrapperDevided } from '../components/sections/style';
import { SytledH1 } from '../components/typografy'

export default function ProfilePage() {
  const userToken = localStorage.getItem("UserToken");

  const [userData, setUserData] = useState({});
  const [rentals ,setRentals] = useState();

  function fetchProfileInfo() {
    const url = "https://event-rentals.herokuapp.com/api/user/profile";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      }
    })
    .then(res => res.json())
    .then(data => setUserData(data));
  }

  function getRentals() {
    const url = "https://event-rentals.herokuapp.com/api/rental";
    fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      }
    })
    .then(res => res.json())
    .then(data => setRentals(data));
  }

  useEffect(() => {
    fetchProfileInfo();
    getRentals();
    // eslint-disable-next-line
  }, [])

  if(localStorage.getItem("UserToken")) {
    return (
      <div>
        <SytledH1>Profil</SytledH1>
        <WrapperDevided>
          <div>
            <h3>{userData.fullName}</h3>
            <h3>{userData.email}</h3>
            <h3>{userData.phone}</h3>
          </div>
        </WrapperDevided>
        <StandardWrapper>
          {rentals && rentals.map(rental => {
            return(
              <StyledProfileRentalCard key={rental.id}>
                <p>{rental.rentalDate[0]}-{rental.rentalDate[1]}-{rental.rentalDate[2]} | <b>{rental.totalPrice}</b>:-</p>
                <StyledProfileProductsWrapper>
                  {rental.products.map(product => {
                    return (
                      <div key={product.id}>
                        <h3>{product.product.name} | {product.quantity}st</h3>
                        <img src={`/images/products/${product.product.categoryName}/${product.product.imageUrl}`} alt=""/>
                      </div>
                    )
                  })}
                </StyledProfileProductsWrapper>
              </StyledProfileRentalCard>
            )
          })}
        </StandardWrapper>
      </div>
    )
  } else {
    return (
      <StandardWrapper>
        <SytledH1>Vänligen logga in för att se dina beställningar</SytledH1>
        <StyledButton href="/login">Login</StyledButton>
      </StandardWrapper>
    )
  }
  
}
