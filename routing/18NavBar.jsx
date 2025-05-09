import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#eee' }}>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            <Link to="/products/1" style={{ margin: '0 10px' }}>Product Details (Example)</Link>
        </nav>
    );
};

export default Navbar;
