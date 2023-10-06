import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { RandomFox } from './compnents/RandomFox'
import styles from '../styles/Home.module.css'

const random = () => Math.floor(Math.random() * 123) + 1;

const Home: NextPage = () => {

  const [images, setImages] = useState([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Fox Images App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random Fox Images - React y TypeScript
        </h1>
        <p className={styles.footer}> Un componente generico de React para cargar imagenes con Lazy Loading</p>
        <p className={styles.footer}> Las imagenes agregadas no se descargaran hasta que sean visibles en la pantalla</p>
        {images.map((image, index) => (
          <div key={index} className='p-4'>
            <RandomFox image={image}/>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
       <p>Soy un footer</p>
      </footer>
    </div>
  )
}

export default Home