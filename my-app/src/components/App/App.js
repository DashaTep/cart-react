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
  }


  const setProduct = (obj) => {
    setCart([...cart, { id: Number(obj.id), title: obj.title, price: Number(obj.price), count: 1 }]);
    data.push(obj)

  }

  const products = cart.map((product) => {
    return <Product product={product} key={product.id} deleteProduct={deleteProduct} />;
  })

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => { return prev + curr.price }, 0),
    count: cart.reduce((prev, curr) => { return prev + curr.count }, 0),
    priceWithDiscount: 0,
    discount: 0
  })

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => { return prev + curr.price }, 0),
      count: cart.reduce((prev, curr) => { return prev + curr.count }, 0),
      discount: 0,
      priceWithDiscount: 0
    })
  }, [cart])

  const setDiscount = (discount) => {
    setTotal({
      discount: discount.discount,
      priceWithDiscount: total.price - total.price * discount.discount / 100,
      price: cart.reduce((prev, curr) => { return prev + curr.price }, 0),
      count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
    })
  }

  return (
    <div className='app'>
      <div className='column'>
        <Cart setProduct={setProduct} />
        <Statistic total={total} />
        <Discount setDiscount={setDiscount} />
      </div>
      <div className='w-100'>{data.length < 1 ? <h1 className='title'>Список пуст</h1> :
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {products}
          </tbody>
        </table>}
      </div>
    </div>
  );
}

export default App;
