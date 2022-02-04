import styles from '../../styles/Ads.module.css';
import Link from 'next/link';
import API_URL from '../../lib/API_URL';
import { useState, useEffect } from 'react';

export default function Ads() {
  const [message, setMessage] = useState('Loading...');
  const [ads, setAds] = useState();
  useEffect(async () => {
    const res = await fetch(`${API_URL}/api/ads`);
    const data = await res.json();

    if (!data) {
      setMessage('failed to fetch data');
    } else {
      setAds(data);
    }
  }, []);
  return (
    <div className={styles.ads}>
      {ads ? (
        ads.map((ad) => {
          const { title, price, condition, image_url, _id } = ad;
          return (
            <div className={styles.ad} key={_id}>
              <div className={styles.ad_image}>
                <img
                  src={image_url}
                  className={styles.img}
                  alt="ad picture"
                  width={400}
                  height={300}
                />
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
        })
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
}
