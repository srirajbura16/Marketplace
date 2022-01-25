import styles from '../../styles/Ads.module.css';
import Link from 'next/link';

export default function Ads({ ads }) {
  return (
    <div className={styles.ads}>
      {ads.map((ad) => {
        const { title, price, condition, image_url, _id } = ad;
        return (
          <div className={styles.ad} key={_id}>
            <div className={styles.ad_image}>
              {/* <img
                src={image_url}
                className={styles.img}
                alt="ad picture"
                width={400}
                height={300}
              /> */}
            </div>
            <div className="price">$ {price}</div>
            <Link href={`/posts/${_id}`}>
              <a>
                <div className={styles.title}>{title}</div>
              </a>
            </Link>
            <div className={styles.condition}>{condition}</div>
          </div>
        );
      })}
    </div>
  );
}
