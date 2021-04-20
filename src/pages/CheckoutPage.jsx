import React, { useState, useEffect, useContext } from 'react';
import CheckoutCart from '../components/checkoutCart';
import CheckoutServices from '../components/checkoutServices';
import { StandardWrapper } from '../components/sections/style';
import { StyledServiceWrapper, StyledCheckBoxSextion } from '../components/checkoutServices/style';
import { StyledH2 } from '../components/typografy'
import { StyledButton } from '../components/button/style';

export default function CheckoutPage() {

  const [totalPrice, setTotalPrice] = useState();
  const cartList = JSON.parse(localStorage.getItem("CartList"));
  const [chosenServicesList, setChosenServicesList] = useState([]);
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

  function getProducts(chosenServicesList) {
    let serviceList = chosenServicesList.map((service) => {
      return {"productId": service.id, "quantity": 1};
    });
    let productList = cartList.map((product) => {
      return {"productId": product.product.id, "quantity": product.chosenQty};
    });
    return [...serviceList, ...productList];
  }

  function getChosenDate() {
    return cartList[0].chosenDate;
  }

  function getTotalPrice() {
    const payload = {
      "rentDate": getChosenDate(),
      "products": getProducts(chosenServicesList)
    }
    const url = "https://event-rentals.herokuapp.com/api/rental/price";
    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => setTotalPrice(data.price));
  }

  function handleCheckboxChange(e, service) {
    
    if(e.target.checked) {
      chosenServicesList.push(service);
      setChosenServicesList([...chosenServicesList]);
    } else {
      setChosenServicesList(chosenServicesList.filter(item => item.id !== service.id));
    }
  }

  function handleBookClick() {
    const userToken = localStorage.getItem("UserToken");

    // if (localStorage.getItem("UserToken")) {
      // getId(location.pathname);

      const payload = {
        "rentDate": getChosenDate(),
        "products": getProducts(chosenServicesList)
      }

      const url = "https://event-rentals.herokuapp.com/api/rental";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`
        },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => console.log(data));

    // } else {
    //   if (window.confirm("Vänligen logga in för att boka en vara")) {
    //     window.location.href = "/login";
    //   }
    // }
  }

  useEffect(() => {
    getTotalPrice();
  }, [chosenServicesList])

  useEffect(() => {
    getServices();
    // console.log(chosenServicesList);
    getTotalPrice();
    // eslint-disable-next-line
  }, [])

  
  return (
    <div>
      {/* <SytledH1>Checkout</SytledH1> */}
      <StandardWrapper>
        <StyledH2>Din korg</StyledH2>
        <CheckoutCart/>
      </StandardWrapper>
      {/* <CheckoutServices/> */}
      <StyledServiceWrapper>
        <div className="standardWidth">
          <h2>Tjänster</h2>
          <p>Välj till övriga tjänster till din beställning!</p>
          <StyledCheckBoxSextion>
            {/* {console.log(servicesList)} */}
            {servicesList && servicesList.map((service) => {
            //  console.log(service.name);
            return(
              <form key={service.name}>
                <input type="checkbox" name={service.name} value={service.price} onChange={(e) => handleCheckboxChange(e, service)}/>
                <label htmlFor={service.name} >{service.name} {service.price}kr</label>
              </form>
            )
            })}
          </StyledCheckBoxSextion>
        </div>
      </StyledServiceWrapper>
      <StandardWrapper>
        <h2>Totalt</h2>
        <h2>{totalPrice} kr</h2>
      </StandardWrapper>
      <StandardWrapper>
        <StyledButton onClick={handleBookClick}>Boka</StyledButton>
      </StandardWrapper>
    </div>
  )
}
