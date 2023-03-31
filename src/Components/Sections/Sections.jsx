import React from 'react';
import Cards from '../Cards/Cards';
import './Sections.css'
const Sections = () => {
    
    return (
        <div className='sections'>
       <div className='section-left'>
       <div className='cards'>
        <Cards></Cards>
        </div>
           <div className='section-right'>
            <h3 className='spent-time'>Spent time on read :  min</h3>
            <div className='bookmark' >
                <h3> Bookmarked Blogs</h3>
                
                </div>
           </div>
       </div>
        </div>
    );
};
export default Sections;