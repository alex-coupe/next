import React from 'react';
import { useRouter } from 'next/router';

/*export const getStaticPaths = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
   

    const paths = data.map(category => {
        category = category.replace(/\s+/g, '-').toLowerCase();
        console.log(category);
        return {
            params:{
               slug: category
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}*/

function categories(props) {
   
    return (
        <div>
            <h1>Category </h1>
        </div>
    );
}

export default categories;