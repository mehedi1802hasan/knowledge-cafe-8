import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {id,user_img,username,image,title}=props.product
   const handleAddToCard=props.handleAddToCard;
   const handleTime=props.handleTime;
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
                    <p>{props.product.readTime} min read <FontAwesomeIcon onClick={()=>handleAddToCard(props.product)} icon={faBookmark} /> </p>  
                </div>
            </div>
           
            <h2>{title}</h2>
            <i>#beginners #programming</i> <br />
            <button className='btn' onClick={()=>handleTime(props.product.time)}>Mark as read</button>
          
           </div>

        </div>
    );
};

export default Product;