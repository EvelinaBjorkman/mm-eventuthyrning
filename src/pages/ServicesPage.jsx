import React from 'react';
import ServicesList from '../components/servicesList';
import { SytledH1 } from '../components/typografy';

export default function ServicesPage() {
  return (
    <div>
      <SytledH1>Våra tjänster</SytledH1>
      <ServicesList/>
    </div>
  )
}
