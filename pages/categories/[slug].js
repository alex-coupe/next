import React from 'react';
import { useRouter } from 'next/router';



export const getStaticPaths = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
   

    const paths = data.map(category => {
        category = category.replace(/\s+/g, '-').toLowerCase();
        
        return {
            params:{
               slug: category
            }
        }
    });

   
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

  const items =  [
    {
      slug: "men-clothing",
      text: "Men's Clothing"
    },
    {
      slug: "women-clothing",
      text: "Women's Clothing"
    },
    {
      slug: "electronics",
      text: "electronics"
    },
    {
      slug: "jewelery",
      text: "jewellery"
    }
  ]

  const category = items.find(item => item.slug == context.params.slug);

  return{ 
    props :  category
  }
}

function categories(props) {
   
    return (
        <div>
            <h1>Category </h1>
        </div>
    );
}

export default categories;