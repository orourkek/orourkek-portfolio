import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '../components/icon';
import styles from '../styles/Home.module.scss';

const GFONT_FAMILY = 'Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin O'Rourke</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${GFONT_FAMILY}`}
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image src="/bridge.jpg" layout="fill" objectFit="cover" />
          <div className={styles.bgOverlay} />
          <header>
            <h1>Kevin O'Rourke</h1>
            <ul className={styles.links}>
              <li>
                <a href="https://github.com/orourkek">
                  <Icon icon="github" width={64} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kevinjorourke">
                  <Icon icon="linkedin" width={64} />
                </a>
              </li>
            </ul>
          </header>
        </section>
      </main>
    </>
  );
}
