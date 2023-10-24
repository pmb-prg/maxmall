import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './shared/Cart';
import Style from './ShopCart.module.css';

import { CartContext } from '../context/CartContextProvider';
const ShopCart = (props) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={Style.maincontainer}>
            <div className={Style.carts}>
                {state.selectedItems.map( item => <Cart key={item.id} data={item} />)}
            </div>
            <div className={Style.container}>
                {
                    state.itemsCounter > 0 && <div>
                        <div >
                            <p>Total Items:<span> {state.itemsCounter}</span></p>
                            <p>Total Payments:<span> ${state.total}</span></p>
                        </div>
                        <div className={Style.buttons}>
                            <button onClick={() => dispatch({type: "CLEAR", payload: props.data})} className={Style.onebtn}>Clear</button>
                            <button onClick={() => dispatch({type: "CHECKOUT", payload: props.data})} className={Style.twobtn}>Checkout</button>
                        </div>
                    </div>
                }
                {
                    state.checkout && <div>
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemsCounter === 0 && <div>
                        <h3>Want To Buy?</h3>
                        <Link to="/products">Go To Shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;