/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const cart = props.cart;  option --0001
    // const { cart } = props; option --0002
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1; if er shortcut
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    const tax = total * 7 / 100;

    const grandTotal = tax + total + totalShipping;

    return (
        <div className='cart'>
            <h3>Orders Summary:</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping Charge:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h3>Grand Total:$ {grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;