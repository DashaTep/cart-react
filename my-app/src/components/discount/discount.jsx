import "./_discount.scss";
import React from "react";
import "./../form-cart/_cart.scss";

const Discount = () => {
    return (
        <form className="discountBlock">
            <label>Скидка</label>
            <input type="number" />
            <button>Установить скидку</button>
        </form>);
}

export default Discount;