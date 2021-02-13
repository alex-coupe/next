import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Categories.module.css';

function index(props) {
    return (
        <div className={styles.flexcontainer}>
            <div className={styles.card}>
                <div className={styles.container}>
                <Link href="/categories/electronics"><a><h4><b>Electronics</b></h4></a></Link>
                </div>
            </div> 

            <div className={styles.card}>
                <div className={styles.container}>
                   <Link href="/categories/women-clothing"><a><h4><b>Women's Clothes</b></h4></a></Link>
                </div>
            </div> 

            <div className={styles.card}>
                <div className={styles.container}>
                <Link href="/categories/men-clothing"><a><h4><b>Men's Clothes</b></h4></a></Link>
                </div>
            </div> 

        </div>
    );
}

export default index;