import React from 'react';
import "./_cart.scss";
import { useForm } from "react-hook-form";

const Cart = ({ setProduct, ...props }) => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        reset,
        handleSubmit,
    } = useForm(
        {
            mode: "onBlur"
        }
    );

    const addProduct = (dataForm) => {
        reset();
        return setProduct(dataForm)
    }

    return (
        <form onSubmit={handleSubmit(addProduct)}>
            <label>Числовой идентификатор</label>
            {<input type="number" {...register('id', { required: "Поле обязательно к заполнению" })} />}

            <div className='red'> {errors?.id && <p>{errors?.id?.message}</p>}</div>

            <label>Название товара</label>
            <input defaultValue={props.title} type="text" {...register('title', { required: "Поле обязательно к заполнению" })} />
            <div className='red'>{errors?.title && <p>{errors?.title?.message}</p>}</div>

            <label>Цена товара</label>
            <input type="number" defaultValue={props.price} {...register('price', { required: "Поле обязательно к заполнению" })} />
            <div className='red'>{errors?.price && <p>{errors?.price?.message}</p>}</div>


            <button type='submit' disabled={!isValid}>Добавить</button>
        </form>
    )
}
export default Cart;