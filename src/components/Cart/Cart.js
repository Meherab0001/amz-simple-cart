import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h2>This is for order list</h2>
               <p>Selected Item:{cart.length}</p>
        </div>
    );
};

export default Cart;