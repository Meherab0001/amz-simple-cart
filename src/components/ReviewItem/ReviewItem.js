import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,removeItem}=props
    const {name,price,shipping,img,quantity}=product
    return (
        <div className='review-item'>
           <div>
               <img src={img} alt="" />
           </div>
           <div className="review-item-details-container">
               <div className="review-item-details">
                        <p className="product-name" title={name}>
                            
                 { name.length>20 ?name.slice(0,20) + '...': name}</p>
                        <p>Price: <span>${price}</span></p>
                        <p>
                            <smal>Shipin:${shipping}</smal>
                        </p>
                        <p>
                            <smal>Quantity:{quantity}</smal>
                        </p>
               </div>
               <div className="delete-container">
                <button onClick={() => removeItem(product)} className="delete-button">
        
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
               </div>

           </div>
        </div>
    );
};

export default ReviewItem;