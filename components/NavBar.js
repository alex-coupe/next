import React from 'react';
import Link from 'next/link';
function NavBar(props) {
    return (
        <nav>
            <Link href="/">
            <div className="logo">
                <h1>Fake Shop</h1>
            </div></Link>
            <Link href="/categories/electronics"><a>Electronics</a></Link>
            <Link href="/categories/jewellery"><a>Jewellery</a></Link>
            <Link href="/categories/men"><a>Men's Clothing</a></Link>
            <Link href="/categories/women"><a>Women's Clothing</a></Link>
        </nav>
    );
}

export default NavBar;