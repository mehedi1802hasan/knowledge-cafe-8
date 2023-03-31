import React from 'react';
import Cards from '../Cards/Cards';
import './Sections.css'
const Sections = () => {
    return (
        <div className='sections'>
       <div className='section'>
       <div className='cards'>
        <Cards></Cards>
        </div>
        <div className='click-Summary'>Bookmarked Blogs</div>
       </div>
        </div>
    );
};
export default Sections;