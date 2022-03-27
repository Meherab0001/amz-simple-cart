import React, { useEffect, useState } from 'react';
import { addToDb, getStorgeCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])

    useEffect( ()=>{
      
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
      
        const storedCart=getStorgeCart()
        const saveCart=[]
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id==id)
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity
               saveCart.push(addedProduct)
            }
           
        }
        setCart(saveCart)
    },[products])
    const handleAddToCart= (selectProduct) =>{
        let newCart=[]
        const exists=cart.find(product =>product.id ==selectProduct.id);
        if(!exists){
            selectProduct.quantity=1;
            newCart=[...cart,selectProduct]
            
        }
        else{
            const rest=cart.filter(product =>product.id !==selectProduct.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]
        }
     
        setCart(newCart)
        addToDb(selectProduct.id)
    }

    return (
        <div className='shop-container'>
           <div className="products-container">
              {
                  products.map(product=><Product
                     key={product.id}
                    product={product}
                    handleAddToCart={ handleAddToCart}
                  ></Product>)
              }
           </div>
           <div className="cart-container">
              
               <Cart cart={cart}></Cart>
           </div>
        </div>

    );
};

export default Shop;