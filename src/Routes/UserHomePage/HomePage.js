import React from 'react';
import Search from '../../components/SearchBar/search'
import ProductItem from '../../components/ProductItem/ProductItem'


export default function HomePage() {
  return (
    <div>
      <Search />
      <p>View Items from local farms near you</p>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}
