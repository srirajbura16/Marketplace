import styles from '../../styles/Ads.module.css';
import Link from 'next/link';

export default function Ads({ ads }) {
  return (
    <div className={styles.ads}>
      {ads.map((ad) => {
        // return <Ad Ad={ad} key={ad._id} />;
        const { title, price, condition, image_url, _id } = ad;
        return (
          <div className={styles.ad}>
            <div className={styles.ad_image}>
              <img
                src={image_url}
                className={styles.img}
                alt="ad picture"
                width={400}
                height={300}
              />
            </div>
            <Link href={`/posts/${_id}`}>
              <a>
                <div className={styles.title}>{title}</div>
              </a>
            </Link>
            <div className={styles.price}>$ {price}</div>
            <div className={styles.condition}>{condition}</div>
          </div>
          // <div className={styles.ad}>
          //   <div className={styles.ad_image}>
          //     <img
          //       src={image_url}
          //       className={styles.img}
          //       alt="ad picture"
          //       width={400}
          //       height={300}
          //     />
          //   </div>
          //   <div className={styles.title}>{title}</div>
          //   <div className={styles.price}>$ {price}</div>
          //   <div className={styles.condition}>{condition}</div>
          // </div>
        );
      })}
    </div>
  );
}
