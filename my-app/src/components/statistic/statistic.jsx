import "./_statistic.scss";

const Statistic = ({ total }) => {
    const { count, price } = total
    return (
        <div className="statistic">
            <h1>Статистика</h1>
            <p>Количество товаров: <span>{count}</span>
            </p>
            <p>Цена текущего списка товаров: <span>{price}</span>
            </p>
        </div>
    );
}

export default Statistic;