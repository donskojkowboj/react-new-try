import { Button } from '@/components/button';

import styles from './package-item.module.scss';

export const PackageItem = ({ package: { id, title, price, description } }) => {
  return (
    <div key={id} className={styles.packageItem}>
      <h3 className={styles.packageTitle}>{title}</h3>
      <div className={styles.packageText}>
        <span className={styles.packagePrice}>{price}</span>
        <span className={styles.packageDescription}>{description}</span>
        <Button variant="primary" additionalClassname={styles.packageButton}>
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};
