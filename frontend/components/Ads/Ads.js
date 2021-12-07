import styles from '../../styles/Ads.module.css';
import Ad from './Ad.js';

export default function Ads({ ads }) {
  return (
    <div className={styles.ads}>
      {ads.map((ad) => {
        return <Ad Ad={ad} key={ad._id} />;
      })}
    </div>
  );
}
