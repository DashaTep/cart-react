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
            <h1> Добавить товар</h1>
            <label>Числовой идентификатор</label>
            <input type="number" {...register('id', { required: "Введите число" })} />
            <div className='red'> {errors?.id && <p><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.095 19.886 9.248-16.5c.133-.237.384-.384.657-.384.272 0 .524.147.656.384l9.248 16.5c.064.115.096.241.096.367 0 .385-.309.749-.752.749h-18.496c-.44 0-.752-.36-.752-.749 0-.126.031-.252.095-.367zm1.935-.384h15.939l-7.97-14.219zm7.972-6.497c-.414 0-.75.336-.75.75v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero" /></svg>{errors?.id?.message}</p>}</div>
            <label>Название товара</label>
            <input defaultValue={props.title} type="text" {...register('title', { required: "Поле обязательно к заполнению" })} />
            <div className='red'>{errors?.title && <p><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.095 19.886 9.248-16.5c.133-.237.384-.384.657-.384.272 0 .524.147.656.384l9.248 16.5c.064.115.096.241.096.367 0 .385-.309.749-.752.749h-18.496c-.44 0-.752-.36-.752-.749 0-.126.031-.252.095-.367zm1.935-.384h15.939l-7.97-14.219zm7.972-6.497c-.414 0-.75.336-.75.75v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero" /></svg>{errors?.title?.message}</p>}</div>
            <label>Цена товара</label>
            <input type="number" defaultValue={props.price} {...register('price', { required: "Введите число" })} />
            <div className='red'>{errors?.price && <p><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.095 19.886 9.248-16.5c.133-.237.384-.384.657-.384.272 0 .524.147.656.384l9.248 16.5c.064.115.096.241.096.367 0 .385-.309.749-.752.749h-18.496c-.44 0-.752-.36-.752-.749 0-.126.031-.252.095-.367zm1.935-.384h15.939l-7.97-14.219zm7.972-6.497c-.414 0-.75.336-.75.75v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero" /></svg>{errors?.price?.message}</p>}</div>
            <button type='submit' disabled={!isValid}>Добавить</button>
        </form>
    )
}
export default Cart;