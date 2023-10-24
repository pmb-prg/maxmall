import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import Style from "./ProductDetails.module.css";
import star from "../assets/icons/star.png";

const ProductDetails = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext);
    const product = data[id -1];
    const {image, title, price, description, category, rating} = product;
    return (
        <div className={Style.maincontainer}>
            <div className={Style.container}>
                <div className={Style.productimg}>
                    <img src={image} alt='product' />
                </div>
                <div className={Style.detail}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p><span>Category:</span> {category}</p>
                    <div className={Style.rate}>
                        <img src={star} alt='star' />
                        <p>{rating.rate}</p>
                    </div>
                    <div className={Style.price}>
                        <span>${price}</span>
                        <Link to="/products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;