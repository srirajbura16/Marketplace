import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>
            <h1>Marketplace</h1>
          </a>
        </Link>
        {session ? (
          <ul className={styles.ul}>
            <li className={styles.username}>
              {session.user.username} <br />
            </li>

            <li className={styles.username}>
              <Link href="/create">Post an Ad</Link>{' '}
            </li>

            <li>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </ul>
        ) : (
          <div className={styles.ul}>
            <button onClick={() => signIn()}>Sign in</button>
            <button>
              {' '}
              <Link href="/register">
                <a className={styles.register}>Register</a>
              </Link>{' '}
            </button>
          </div>
        )}
      </nav>
      {/* <hr /> */}
    </div>
  );
}
