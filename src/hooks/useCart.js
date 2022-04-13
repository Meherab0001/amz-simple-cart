import { useEffect, useState } from "react"
import { getStorgeCart } from "../utilities/fakedb"

const useCart =(products) =>{
    const [cart,setCart]=useState([])
     
    useEffect(( )=>{
        const stordeCart =getStorgeCart()
        const saveCart=[];
        for(const id in stordeCart){
            const addedProduct=products.find( product =>product.id == id)
            if(addedProduct){
                const quantity=stordeCart[id]
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)

            }
        }
        setCart(saveCart)

    },[products])
    return [cart,setCart]
}

export default useCart