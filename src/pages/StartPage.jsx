import React from 'react';

// import { StyledButton } from '../components/button/style.jsx';
import CategoryList from '../components/categoryList/CategoryList.jsx';
import Hero from '../components/hero/index.jsx';
import ReviewSection from '../components/sectionReviews/index.jsx';
import ServicesList from '../components/servicesList/index.jsx';
import { SytledH1 } from '../components/typografy.jsx';

export default function StartPage() {

  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <SytledH1>Våra produkter</SytledH1>
      <CategoryList/>
      <ReviewSection/>
      <SytledH1>Våra tjänster</SytledH1>
      <ServicesList/>
      {/* <Footer/> */}
    </div>
  )
}
