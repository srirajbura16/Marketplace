import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Ads from '../components/Ads/Ads';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ data: ads }) {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}

      <main className={styles.main}>
        <h1>Listings</h1>
        <Ads ads={ads} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/ads`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

// import { useSession, signIn, signOut } from 'next-auth/react';

// export default function Home() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }
