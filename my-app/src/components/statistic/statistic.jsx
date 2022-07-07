import "./_statistic.scss";

const Statistic = ({ total }) => {
    const { count, price } = total
    return (
        <div className="statistic">
            <h1>Статистика</h1>
            <h3>Количество добавленных в данный момент товаров.
            </h3>
            <p>{count}</p>
            <h3>Цена текущего списка товаров
            </h3>
            <p>{price}</p>
        </div>
    );
}

export default Statistic;