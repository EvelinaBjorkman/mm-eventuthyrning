import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

import { CalendarCard, CalendarGrid, MonthSection } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledH2 } from '../typografy';
import { StyledButton } from '../button/style';
import { StandardWrapper } from '../sections/style';
import { StyledInput } from '../input/style';

export default function BookingCalendar({product}) {

  const monthList = [ "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
  
  const location = useLocation();
  let id = "";

  const [dateList, setDateList] = useState();

  const year = moment().year();

  const [monthInt, setMonthInt] = useState();
  const [month, setMonth] = useState("");

  function getMonth() {
    let todaysMonth = moment().month();
    setMonthInt(todaysMonth);
  }

  function checkAvailability(fromDate, toDate) {
    const payload = {
      "fromDate": fromDate,
      "toDate": toDate
    }
    const url = `https://event-rentals.herokuapp.com/api/product/${id}/available`;
    if(fromDate !== "Invalid date" && toDate !== "Invalid date") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => setDateList(data));
    }
  }

  function getId(str) {
    id = str.split('/')[2];
  }

  useEffect(() => {
    getMonth();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setMonth(monthList[monthInt]);
    let startDate = moment([year, monthInt]).format('YYYY-MM-DD');
    let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');
    getId(location.pathname);
    checkAvailability(startDate, endDate);
  }, [monthInt])

  function handleLeftArrowClick() {
    setMonthInt(monthInt - 1);
  }

  function handleRightArrowClick() {
    setMonthInt(monthInt + 1);
  }

  const [chosenDate, setChosenDate] = useState("");
  const [qty, setQty] = useState("");
  const [chosenQty, setChosenQty] = useState(1);

  function toggleChosenClass(e, qtyAvailable) {
    if(e.target.classList.contains("chosen")) {
      setChosenDate("");
    } else {
      setChosenDate(e.target.id);
      setQty(qtyAvailable);
    }
  }

  function addToCart() {
    let cartList = [];

    if(localStorage.getItem("CartList")) {
      cartList = JSON.parse(localStorage.getItem("CartList"));
    }
    if(cartList.length > 0) {
      if(cartList[0].chosenDate == chosenDate) {
        cartList.push({product, chosenQty, chosenDate});
        localStorage.setItem("CartList", JSON.stringify(cartList));
      } else {
        alert("Vänligen välj samma datum för beställningen.")
      }
    } else {
      cartList.push({product, chosenQty, chosenDate});
      localStorage.setItem("CartList", JSON.stringify(cartList));
    }
  }

  return (
    <div>
      <StyledH2>Boka Varan</StyledH2>
      <MonthSection>
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleLeftArrowClick} className="pointer"></FontAwesomeIcon>
        <h3>{month}</h3>
        <FontAwesomeIcon icon={faArrowRight} onClick={handleRightArrowClick} className="pointer"></FontAwesomeIcon>
      </MonthSection>
      <CalendarGrid>
        {dateList && Object.keys(dateList).map(day => {
          if(dateList[day].numberAvailable !== 0) {
            return (
              <CalendarCard key={day} id={day} className={`${day == chosenDate ? "chosen" : ""}`} bookable onClick={(e) => toggleChosenClass(e, dateList[day].numberAvailable)}>
                <p>{day.split('-')[2]}</p>
              </CalendarCard>
            )
          } else {
            return (
              <CalendarCard key={day} >
                <p>{day.split('-')[2]}</p>
              </CalendarCard>
            )
          }
        })}
      </CalendarGrid>
      <StandardWrapper>
        <label>Välj antal:</label>
        <StyledInput type="number" min="1" max={qty} defaultValue={1} onChange={(e) => setChosenQty(e.target.value)}/>
        <StyledButton onClick={addToCart}>Boka</StyledButton>
      </StandardWrapper>
    </div>
  )
}
