//list user info, listings
import React from 'react';
import styles from '../../styles/User.module.css';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function User({ data: user }) {
  console.log(user);
  const { username, email, ads } = user;
  return (
    <Layout headTitle={username}>
      <div className={styles.user}>
        <h2>{username}</h2>
        <div>{email}</div>
        <hr />
        <div className={styles.ads}>
          {ads.length > 0
            ? ads.map((ad) => {
                const { title, price, condition, _id, image_url } = ad;
                return (
                  <Link to={`/ads/${_id}`}>
                    <a>
                      <div>
                        <div>{title}</div>
                        <div>{price}</div>
                        <div>{condition}</div>
                      </div>
                    </a>
                  </Link>
                );
              })
            : 'The User has not posted any ads.'}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:5000/api/users/${id}`);
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
