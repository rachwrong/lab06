import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({data}) {


  return (
    <div className={styles.container}>
      <Head>
        <title>P P CAR PORTAL!?</title>
        <meta name="description" content="PP CAR PORTAL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome Student!
        </h1>

        <p className={styles.description}>
          Welcome to your dashboard!
        </p>

        <div className={styles.grid}>
          <Link href="/carData">
            <a className={styles.card}>
              <h2>Car Data</h2>
              <p>
                View your car data here!
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>hello there</p>
      </footer>
    </div>
  )
}
