import { useContext } from 'react';
import MealsItemForm from './MealsItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cartContext';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price= `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id : props.id,
            name : props.name,
            amount : amount,
            price : props.price
        });
    }


    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div classes={classes.price}>{price}</div>
        </div>
        <div>
            <MealsItemForm id={props.id}/>
        </div>
    </li>
}

export default MealItem;