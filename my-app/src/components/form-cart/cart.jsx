import React from 'react';
import "./_cart.scss";

const Cart = () => {
    return (
        <form>
            <label>Числовой идентификатор</label>
            <input type="number" />
            <label>Название товара</label>
            <input type="text" />
            <label>Цена товара</label>
            <input type="number" />
            <button>Добавить</button>
        </form>
    )
}
export default Cart;