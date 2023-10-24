import React, { useContext } from 'react';
import { shorter} from '../../helper/functions';
import { CartContext } from '../../context/CartContextProvider';
import Style from "./Cart.module.css";
import trashIcon from "../../assets/icons/trash.svg";
const Cart = (props) => {

    const {dispatch} = useContext(CartContext);

    const {image, title, price, quantity} = props.data;
    return (
        <div className={Style.container}>
            <div className={Style.image}>
                <img src={image} alt="product" />
            </div>
            <div className={Style.detail}>
                <h3>{shorter(title)}</h3>
                <p>${price}</p>
            </div>
            <span>{quantity}</span>
            <div className={Style.button}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt='trash' /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;