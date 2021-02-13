import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Shop | Home</title>
        <meta name="keywords" content="shop"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus. Proin fermentum leo vel orci. Urna duis convallis convallis tellus id interdum velit. Et tortor at risus viverra adipiscing. Quam viverra orci sagittis eu volutpat odio facilisis. Suspendisse potenti nullam ac tortor. Amet nisl suscipit adipiscing bibendum est ultricies</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus. Proin fermentum leo vel orci. Urna duis convallis convallis tellus id interdum velit. Et tortor at risus viverra adipiscing. Quam viverra orci sagittis eu volutpat odio facilisis. Suspendisse potenti nullam ac tortor. Amet nisl suscipit adipiscing bibendum est ultricies</p>
        <Link href="/categories/"><a className={styles.btn}>Shop Now</a></Link>
      </div>
    </>
  )
}
