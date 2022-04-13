import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProjects';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const removeItem = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {cart.map(product => <ReviewItem
                    removeItem={removeItem}
                    key={product.id}
                    product={product}
                ></ReviewItem>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Procced Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;