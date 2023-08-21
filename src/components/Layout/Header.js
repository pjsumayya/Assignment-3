import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import meansImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={meansImage} alt='A table full of delicioud food!'/>
        </div>
    </Fragment>
};

export default Header;