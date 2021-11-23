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
          Welcome to Car Portal
        </h1>

        <p className={styles.description}>
          If you edit and save this page, it will automatically change in the browser (in dev mode only!)
        </p>

        <div className={styles.grid}>
          <Link href="/student">
            <a className={styles.card}>
              <h2>Sample Student Page &rarr;</h2>
              <p>
                This is how you link pages together. The file name in "pages" folder is your url.
                Make sure to put the href in the "Link" class instead of "a" for high performance redirection
              </p>
              <p><code className={styles.code}>pages/student.js = url.com/student</code></p>
            </a>

          </Link>

          <div className={styles.card}>
            <h2>Making html files in JS</h2>
            <p>In your .js file, provide an export for your function "export default function Home()"
            and then inside the function, return your html as provided in this example index.js "return(htmlthings)"
          </p>
          </div>

          <div className={styles.card}>
            <h2>Making API requests</h2>
            <p>Put the server requests in pages/api and it will turn into a server request handler. follow the hello.js example.
              *note that this is most likely for the car to request to the api, not for this website to request.
          </p>
          </div>

            
        </div>
        <h2>Running server sided code</h2>
            <p>Put the server sided code in the 
            <code className={styles.code}>export async function getStaticProps(context)</code>
             as shown in the index.js example to be able to send data from the server side (e.g. mysql database stuff) to the web portal.
          </p>
          <p>however this example shows you how to fetch data from the pages/api, but you can modify it to fetch from the mysql database</p>
          <p>The result from the api is (and yes you can perform for loops and other code inside html using this kind of js!)
              {data.map((k) => (
            <li>hello, {k.name}!</li>
          ))}
          </p>

      </main>

      <footer className={styles.footer}>
        <p>hello there</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() { //if you edit this part, usually need to refresh the browser
  const res = await fetch(`http://localhost:3000/api/hello`) //can change this to mysql stuff
  const data = await res.json() //not necessarily to be in json format, can be in pure string
  if (!data) {
    return {
      props: {data:"nodata"}
      }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}