import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div class="header">
         <h3>Knowledge Cafe</h3>
         <div className='header-items'>
            <a href="">Login</a>
            <a href="">Service</a>
            <a href="">LogOut</a>
            <a href="">Profile</a>
          
         </div>
        </div>
    );
};

export default Header;