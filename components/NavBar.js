import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavBar(props) {
    return (
        <nav>
            <Link href="/">
            <div className="logo">
                <Image src="/logo.svg" width={128} height={77} alt="logo"/>
                <h1>Fake Shop</h1>
            </div></Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/categories/electronics"><a>Electronics</a></Link>
            <Link href="/categories/jewellery"><a>Jewellery</a></Link>
            <Link href="/categories/men"><a>Men's Clothing</a></Link>
            <Link href="/categories/women"><a>Women's Clothing</a></Link>
        </nav>
    );
}

export default NavBar;