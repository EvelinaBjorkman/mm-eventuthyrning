import React from 'react';

import CategoryList from '../components/categoryList/CategoryList.jsx';
import Hero from '../components/hero/index.jsx';
import ServicesList from '../components/servicesList/index.jsx';

import { SytledH1 } from '../components/typografy.jsx';

export default function StartPage() {

  return (
    <div>
      <Hero/>
      <SytledH1>Våra produkter</SytledH1>
      <CategoryList/>
      <SytledH1>Våra tjänster</SytledH1>
      <ServicesList/>
    </div>
  )
}
