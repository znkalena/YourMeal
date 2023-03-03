import { API_URI, POSTFIX } from "../../store/category/const";
import style from "./catalogProduct.module.css";

export const CatalogProduct = ({ item }) => (
<article className={style.product}>
    <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image}/>

    <p className={style.price}>{item.price}<span className="currency">₽</span></p>

    <h3 className={style.title}>
    <button className={style.detail}>{item.title}</button>
    </h3>

    <p className={style.weight}>{item.weight}г</p>

    <button className="add" type={style.add}>Добавить</button>
</article>
);