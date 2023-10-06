import type { NextPage } from 'next'
import Head from 'next/head'
import { RandomFox } from './compnents/RandomFox'
import styles from '../styles/Home.module.css'

const random = () => Math.floor(Math.random() * 123) + 1;

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Fox Images App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random Fox Images - React y TypeScript
        </h1>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
  
      </main>

      <footer className={styles.footer}>
       <p>Soy un footer</p>
      </footer>
    </div>
  )
}

export default Home