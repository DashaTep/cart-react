import React from 'react';
import "./_product.scss";

const Product = ({ product, deleteProduct }) => {
    const { id, title, price } = product;
    return (
        <div className='products'>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <button onClick={() => { deleteProduct(id) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm9.805-16.5l-3.432 12h-2.102l2.541-9h-5.993c.115.482.181.983.181 1.5 0 3.59-2.91 6.5-6.5 6.5-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-5v1h5v-1z" /></svg>
            </button>
        </div>
    )
}

export default Product;
