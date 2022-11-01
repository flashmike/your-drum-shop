import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <h1 className='whitened'>Your Drum Shop</h1>
            </div>

            <div className="rightSide">
                <h4 className='whitened'>React + Redux Online Shop</h4>
            </div>

        </div>
    )
}

export default Navbar;
