import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin O'Rourke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Hello World</h1>
        </section>
      </main>
    </>
  );
}
