import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, headTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
