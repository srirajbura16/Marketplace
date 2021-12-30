import styles from '../../styles/AdDetails.module.css';
// import Ad from ''

export default function AdDetails({ data: ad }) {
  console.log(ad, 'FROM COMPONENT');
  const { title, description, price, condition, image_url } = ad;
  return (
    <div className={styles.ad}>
      <div className={styles.ad_image}>
        <img src={image_url} alt="ad image" />
      </div>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <hr />
      <div className={styles.description}>{description}</div>
      <div className={styles.condition}>{condition}</div>
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
