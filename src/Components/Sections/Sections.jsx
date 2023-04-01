import React, { useEffect, useState } from 'react';
import './Sections.css'
import Product from '../Product/Product';

const Sections = () => {
    const [products,setProducts]=useState([])
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    const handleAddToCard=(p)=>{
     //   console.log(p)
     if (blogs.find(blog=>blog.id===p.id)) {
        console.log(alert)
     } else {
        const newArr =[...blogs,p]
        setBlogs(newArr)
     }
    }
    
    return (
        <div className='sections'>
       <div className='section-left'>
         <div className="cards"> {
                products.map(product=><Product
                    product={product}
                     key={product.id}
                     handleAddToCard={handleAddToCard}
                ></Product>)
            }
            </div>
      
        </div>
           <div className='section-right'>
            <h3 className='spent-time'>Spent time on read : min</h3>
            
            <div className='bookmark' >
                <h3> Bookmarked Blogs{blogs.length}</h3>
                {
                    blogs.map(blog=><h2 className='title'>{blog.title}</h2>)
                }

                
                </div>
           </div>
       </div>
       
    );
};
export default Sections;