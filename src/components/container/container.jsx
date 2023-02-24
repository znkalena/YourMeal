import classNames from 'classnames';
import style from './container.module.css';


export const Container = ({children,className}) => (
<div className={classNames(style.container,className)}>
    {children}
</div>
);

