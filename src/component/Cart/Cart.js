import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}

    const totalReducer = (prevValue, currentvalue) => prevValue + currentvalue.price
    const total = cart.reduce(totalReducer, 0).toFixed(2)
    const tax = (0.1 * total).toFixed(2)
    const totalprice = (Number(total) + Number(tax)).toFixed(2)
    return (
        <div>
            <h3><i class="fas fa-shopping-cart"></i> {cart.length}</h3>

            <h2> ${total}</h2>
            <h3>Tax: ${tax}</h3>
            <h3>Total Price: ${totalprice}</h3>
            <ul>
                {
                    cart.map(product => <li>{product.category}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;