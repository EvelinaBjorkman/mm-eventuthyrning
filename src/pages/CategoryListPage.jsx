import React from 'react'
import CategoryList from '../components/categoryList/CategoryList'
// import ProductCard from '../components/productCard'
import { SytledH1 } from '../components/typografy'

export default function CategoryPage() {
  return (
    <div>
      <SytledH1>Våra Produkter</SytledH1>
      <CategoryList/>
    </div>
  )
}
