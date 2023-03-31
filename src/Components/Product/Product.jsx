import React from 'react';
import "./Product.css"
const Product = (props) => {
    const {id,user_img,username,image,title}=props.product
    console.log(props.product)
    return (
        <div className='product'>
           <img className='img' src={image} alt="" />
           <div className="product-info">
            <div id='flex-part'>
                <div className='left-side'>
                    <div>
                        <img className='user-img' src={user_img} alt="" />
                    </div>
                    <div style={{lineHeight:"5px"}}>
                    <h5>{username}</h5>
                    <p style={{marginTop:"0px"}}>Mar 14 (4 Days ago)</p>
                    </div>
                </div>

                <div className='right-side'>
                    <p>10 min read</p>
                </div>
            </div>
           
            <h2>{title}</h2>
            <i>#beginners #programming</i>
            <h4><a href="">Mark as read</a></h4>
          
           </div>

        </div>
    );
};

export default Product;