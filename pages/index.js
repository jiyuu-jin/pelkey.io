import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Pelkey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Pelkey.io!</a>
        </h1>

        <p className={styles.description}>
          The Homepage of Zachary Pelkey
          <code className={styles.code}>and all things code.</code>
        </p>

        <div className={styles.grid}>
          <Link href="/projects" as={process.env.BACKEND_URL + '/projects'} >
            <a className={styles.card}>
              <h3>Projects &rarr;</h3>
              <p>Check out some of the cool projects that I've been a part of.</p>
            </a>
          </Link>

          <Link href="/resume" as={process.env.BACKEND_URL + '/resume'} >
            <a className={styles.card}>
              <h3>Resume &rarr;</h3>
              <p>Take a look at my track record of building cool things.</p>
            </a>
          </Link>

          <Link href="/contact" as={process.env.BACKEND_URL + '/contact'} >
            <a className={styles.card} >
              <h3>Contact Me &rarr;</h3>
              <p>Contact me with business inquiries or just to say hello.</p>
            </a>
          </Link>

          <Link href="/contribute" as={process.env.BACKEND_URL + '/contribute'} >
            <a className={styles.card}>
              <h3>Contribute&rarr;</h3>
              <p>
                Always looking for support on projects. 
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jiyuu-jin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Love and Coffee
        </a>
      </footer>
    </div>
  )
}
