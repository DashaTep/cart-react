import "./_statistic.scss";

const Statistic = ({ total }) => {
    const { count, price, priceWithDiscount, discount } = total
    return (
        <div className="statistic">
            <h1>Статистика</h1>
            <p>Количество товаров: <span>{count}</span>
            </p>
            <div className="inline">
                Цена текущего списка товаров:
                {(priceWithDiscount > 0) ? <div><span className='prevPrice'> {price} </span> {priceWithDiscount} </div> : <span>{price}</span>}
            </div>
            <p>Скидка: {discount > 0 ? `${discount}%` : 'скидка не установлена'} </p>
        </div>
    );
}

export default Statistic;