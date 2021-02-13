import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <div className="logo">
                <h1>Fake Shop</h1>
            </div>
            <a>Electronics</a>
            <a>Jewellery</a>
            <a>Men's Clothing</a>
            <a>Women's Clothing</a>
        </nav>
    );
}

export default NavBar;