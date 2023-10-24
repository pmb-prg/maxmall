import React, { useContext} from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import Product from './shared/Product';
import Style from "./Store.module.css"
const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div className={Style.container}>
            {
                products.map(item => <Product 
                        key={item.id} 
                        productData={item}  
                    />)
            }
        </div>
    );
};

export default Store;