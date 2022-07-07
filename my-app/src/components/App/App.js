import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../form-cart/cart';
import Product from '../product/product';
import Statistic from '../statistic/statistic';
import Discount from '../discount/discount';
import "./_App.scss";
import data from './../../data';

function App() {

  const [cart, setCart] = useState(data);

  const deleteProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => {
        return id !== product.id
      })
    })

    const index = data.findIndex(n => n.id === id);
    if (index !== -1) {
      data.splice(index, 1);
    }
    console.log('del', data)

  }

  const setProduct = (obj) => {
    setCart([...cart, { id: Number(obj.id), title: obj.title, price: Number(obj.price), count: 1 }]);
    data.push(obj)
    console.log('set', data)
  }


  const products = cart.map((product) => {
    return <Product product={product} key={product.id} deleteProduct={deleteProduct} />;
  })


  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => { return prev + curr.price }, 0),
    count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
  })

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => { return prev + curr.price }, 0),
      count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
    })
  }, [cart])


  return (
    <div className='app'>
      <Cart setProduct={setProduct} />
      <Statistic total={total} />
      <div>
        <div>{data.length === 0 ? <h1>Список пуст</h1> : ''}</div>
        {products}
      </div>
      <Discount />
    </div>
  );
}

export default App;
