import "./_discount.scss";
import React from "react";
import "./../form-cart/_cart.scss";
import { useForm } from "react-hook-form";

const Discount = ({ setDiscount }) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    let active = true;
    const getDiscount = (discount) => {
        return setDiscount(discount);
    }

    const getDiscount0 = (discount) => {
        discount = 0;
        reset()
        return setDiscount(discount);
    }

    return (
        <form className='discountBlock' onSubmit={handleSubmit(getDiscount)} >
            <h1>Установить скидку</h1>
            <label>Скидка %</label>
            <input defaultValue='' type="number" min='0' max='100' {...register('discount')} />
            <div className="buttons">
                <button type="sumbit">Установить скидку</button>
                <button onClick={handleSubmit(getDiscount0)} disabled={!active}>Cбросить скидку</button>
            </div>
        </form>);
}

export default Discount;