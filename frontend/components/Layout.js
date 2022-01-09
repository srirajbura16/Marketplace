import Head from 'next/head';
import styles from '../styles/Layout.module.css';
// import Nav from './Nav';

export default function Layout({ children, headTitle, nav }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
      </Head>
      {/* {nav ? <Nav /> : ''} */}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
