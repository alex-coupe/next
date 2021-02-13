import React from 'react';
import styles from '../../styles/Categories.module.css';
import Image from 'next/image';


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
      text: "jewelery"
    }
  ]

  const category = items.find(item => item.slug == context.params.slug);

  const res = await fetch(`https://fakestoreapi.com/products/category/${category.slug}`)
  const data = await res.json();
  console.log(data);

  return {
    props: {category, data}
  }

}

function categories({category, data}) {
   
    return (
        <div>
            <h1>{category.text}</h1>
            {data.map((item) => {
              return (
              <div className={styles.card} key={item.id}>
                  <Image src={item.image} width={300} height={300} alt={item.title}/>
                  <div className={styles.container}>
                  <a><h4><b>{item.title}</b></h4></a>
                  <ul>
                    <li>{item.description}</li>
                    <li><b>{item.price}</b></li>
                  </ul>
                  <div className="btn"><a href="/">Buy Now</a></div>
                </div>
            </div> )
            })}
        </div>
    );
}

export default categories;