import "./_discount.scss";
import React from "react";
import "./../form-cart/_cart.scss";

const Discount = () => {
    return (
        <form className="discountBlock">
            <h1>Установить скидку</h1>
            <label>Скидка</label>
            <input type="number" min='0' max='100' value='1' />
            <button>Установить скидку</button>
        </form>);
}

export default Discount;