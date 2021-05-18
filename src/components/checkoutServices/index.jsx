import React, { useEffect, useState } from 'react'
import { StandardWrapper } from '../sections/style'
import { StyledCheckBoxSextion, StyledServiceWrapper } from './style'

export default function CheckoutServices() {

  const userToken = localStorage.getItem("UserToken");
  let productIds = [];
  const [servicesList, setServicesList] = useState([]);

  function getProductIds() {
    let cartList = JSON.parse(localStorage.getItem("CartList"));
    productIds = cartList.map((product) => product.product.id);
  }

  function getServices () {
    getProductIds()
    const url = "https://event-rentals.herokuapp.com/api/rental/service";
    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productIds)
    })
    .then(res => res.json())
    .then(data => setServicesList(data));
  }
  
  useEffect(() => {
    getServices();
  }, [])



  return (
    <StyledServiceWrapper>
      <div className="standardWidth">
        <h2>Tjänster</h2>
        <p>Välj till övriga tjänster till din beställning!</p>
        <StyledCheckBoxSextion>
          {servicesList && servicesList.map((service) => {
           return(
            <div key={service.name}>
              <input type="checkbox" name={service.name} value={service.price}/>
              <label htmlFor={service.name}>{service.name} {service.price}kr</label>
            </div>
           )
          })}
        </StyledCheckBoxSextion>
      </div>
    </StyledServiceWrapper>
  )
}
