import styles from '../../styles/Ads.module.css';

export default function Ads({ ads }) {
  return (
    <div className={styles.ads}>
      {ads.map((ad) => {
        <Ad ad={ad} key={ad.id} />;
      })}
    </div>
  );
}

function Ad({ ad }) {
  const { price, title, location } = ad;
  return (
    <div className={styles.ad}>
      <div className={styles.price}>{price}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.location}>{location}</div>
    </div>
  );
}
