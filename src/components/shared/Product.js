import React, {useContext} from 'react';
import { shorter, isInCart, quantityCount } from '../../helper/functions';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import trashIcon from "../../assets/icons/trash.svg";
import Style from "./Product.module.css";
const Product = ({productData}) => {


    const {state, dispatch} =useContext(CartContext);


    return (
        <div className={Style.container}>
            <div className={Style.image}>
                <img src={productData.image} alt='products'  />
            </div>
            <div className={Style.details}>
                <h3>{shorter(productData.title)}</h3>
                <p>${productData.price}</p>
            </div>
            <div className={Style.keys}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {
                        quantityCount(state, productData.id) > 1 && 
                        <button onClick={() => dispatch({type:"DECREASE", payload: productData})} className={Style.buttons}>-</button>
                    }
                    {   quantityCount(state, productData.id) === 1 && 
                        <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})} className={Style.buttons}><img src={trashIcon} alt='trash' /></button>
                    }
                    {quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span> }
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE", payload: productData})} className={Style.buttons}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData})} className={Style.additem}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;