import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>${price}</p>
                <p>manufacturer:{seller}</p>
                <p>Ratings:{ratings} stars</p>
            </div>
            <button className='btn-cart'>add to cart</button>

        </div>
    );
};

export default Product;