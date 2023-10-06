import { MouseEventHandler, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { RandomFox } from './compnents/RandomFox'
import styles from '../styles/Home.module.css'
import { type } from 'os';

const random = () => Math.floor(Math.random() * 123) + 1;
type ImageItem = {id:string, url:string};
const generatedId = () => Math.random().toString(36).substr(2,9);

const Home: NextPage = () => {

  const [images, setImages] = useState<Array<ImageItem>>([])
     
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const newImage: ImageItem =  {id: generatedId(), url:`https://randomfox.ca/images/${random()}.jpg`};

    setImages([...images, newImage])
  }

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

        <button onClick={addNewFox} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">Add new Fox Image</button>
        {images.map(({id, url}) => (
          <div key={id} className='p-4'>
            <RandomFox image={url}/>
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