import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
    <div className="headerLinks">
        <Link to="/">
            <label>HeaderImage</label> 
        </Link>
        <Link to="/info">
            <label>Info</label> 
       </Link>
       <Link to="/code">
            <label>Code</label> 
       </Link>
       <Link to="/videos">
            <label>Videos</label> 
       </Link>
       <Link to="/images">
            <label>Images</label> 
       </Link>
       <Link to="/contact">
            <label>Contact</label>
       </Link> 
    </div>)
}

export default Header;