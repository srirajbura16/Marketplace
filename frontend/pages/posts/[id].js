import styles from '../../styles/AdDetails.module.css';
import Head from 'next/head';

export default function AdDetails({ data: ad }) {
  const { title, description, price, condition, image_url } = ad;
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.ad}>
        <h1>{title}</h1>
        <hr />
        <div className={styles.ad_image}>
          <img src={image_url} alt="ad image" />
        </div>

        <div>
          <div className="price">$ {price}</div>
          <div className={styles.condition}>{condition}</div>
        </div>
        <hr />
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.user}>
        {/* {link to profile} */}
        {/* <div>{username}</div>
        <div>{email}</div> */}
        <div>John Doe</div>
        <div>john.doe@ttt.com</div>
        <button>Chat</button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/api/ads/${id}`);
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
