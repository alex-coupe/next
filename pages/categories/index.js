import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Categories.module.css';
import Head from 'next/head';

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();

    return {
        props:{
            categories:data
        }
    }
}

function index({categories}) {
  
    return (
        <>
        <Head>
        <title>Fake Shop | Categories</title>
        </Head>
        <div className={styles.flexcontainer}>
        {categories.map(category => {
            return (
                <div className={styles.card} key={category}>
                    <div className={styles.container}>
                        <Link href={`/categories/${category.replace(/\s+/g, '-').toLowerCase()}`}><a><h4><b>{category}</b></h4></a></Link>
                    </div>
                </div> 
            )
        })}

        


        </div>
        </>
    );
}

export default index;