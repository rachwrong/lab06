import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function carData({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PP CAR PORTAL</title>
        <meta name="description" content="PP CAR PORTAL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Car Data
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>hello there</p>
      </footer>
    </div>
  )
}
