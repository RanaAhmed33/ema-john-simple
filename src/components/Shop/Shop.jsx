/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        // step 01: get id
        for (const id in storedCart) {
            //    step 02:get the product by using id
            const addedProduct = products.find(product => product.id === id);

            // // step 03: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // step 04: add the added product to the save cart
                savedCart.push(addedProduct)

            }
            console.log('addedProduct', addedProduct)
        }

        // step 05:set the cart
        setCart(savedCart)

    }, [products])


    const handleAddToCart = (product) => {
        let newCart = [];

        // console.log(product)
        // const newCart = [...cart, product];


        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }

        setCart(newCart)
        addToDb(product.id)


    }



    return (
        <div className='shop-container'>
            <div className='products-container'>

                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>


            </div>

        </div>
    );
};

export default Shop;