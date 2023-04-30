import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const cart = props.cart;  option --0001
    // const { cart } = props; option --0002
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;

    }

    const tax = total * 7 / 100;

    const grandTotal = tax + total + totalShipping;

    return (
        <div className='cart'>
            <h3>Orders Summary:</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping Charge:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h3>Grand Total:$ {grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;