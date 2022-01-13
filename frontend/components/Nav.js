import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>Marketplace</h1>
        {session ? (
          <ul className={styles.ul}>
            <li className={styles.username}>
              {session.user.username} <br />
            </li>
            <li>My Chats</li>
            <li>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </ul>
        ) : (
          <div className={styles.ul}>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        )}
      </nav>
      {/* <hr /> */}
    </div>
  );
}
