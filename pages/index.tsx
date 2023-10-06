import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

  
      </main>

      <footer className={styles.footer}>
       <p>Soy un footer</p>
      </footer>
    </div>
  )
}

export default Home