import React from 'react';
import Cart from '../form-cart/cart';
import ListProducts from '../list-products/list-products';
import Statistic from '../statistic/statistic';
import Discount from '../discount/discount';
import "./_App.scss";

function App() {
  return (
    <div className='App'>
      <Cart />
      <div className='ListProducts'>
        <ListProducts />
      </div>
      <Statistic />
      <Discount />
    </div>
  );
}

export default App;
