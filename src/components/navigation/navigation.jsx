import { Container } from '../container/container';
import style from './navigation.module.css';

export const Navigation = () => {
    return(
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          <li className={style.item}>
            <button className={classNames(style.button,button_burger, style.button_active)}>Бургеры</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button,button_snack)}>Закуски</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_hotdog)}>Хот-доги</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_combo)}>Комбо</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_shawarma)}>Шаурма</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_pizza)}>Пицца</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_wok)}>Вок</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_dessert)}>Десерты</button>
          </li>
          <li className={style.item}>
            <button className={classNames (style.button,button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
    )
    };