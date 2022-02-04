import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Ads from '../components/Ads/Ads';
import API_URL from '../lib/API_URL';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Ads />
      </main>
    </div>
  );
}
