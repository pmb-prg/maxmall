import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContextProvider';
import shopIcon from "../../assets/icons/shop.svg";
import Style from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div className={Style.container}>
            <Link to="/products" className={Style.productsLink}>Products</Link>
            <div>
                <Link to="/cart" className={Style.shopLink}><img src={shopIcon} alt='shop' /></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;