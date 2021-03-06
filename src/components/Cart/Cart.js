import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    // console.log(cart)
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity +product.quantity
        total=total+product.price* product.quantity
        shipping=shipping+product.shipping
    }
    const tax=parseFloat((total *0.1).toFixed(2));
    const grantTotal=total+shipping+tax;
    return (
        <div className='cart'>
             <h2>This is for order list</h2>
             <p>Selected Item:{quantity}</p> 
             <p>Total Price:${total}</p>
             <p>Total Shipping:${shipping}</p>
             <p>Tax:${tax}</p>
             <h5>Grand Total:${grantTotal.toFixed(2)}</h5>
            <div>
         {props.children}
            </div>
        </div>
    );
};

export default Cart;