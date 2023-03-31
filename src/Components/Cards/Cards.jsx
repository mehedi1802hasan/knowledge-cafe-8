import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cards.css'

const Cards = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    const handleAddToCard=(product)=>{
        console.log(product)
    }
    return (
        <div>
         
            {
                products.map(product=><Product 
                    product={product}
                     key={product.id}
                     handleAddToCard={handleAddToCard}
                ></Product>)
            }
        </div>
    );
};

export default Cards;