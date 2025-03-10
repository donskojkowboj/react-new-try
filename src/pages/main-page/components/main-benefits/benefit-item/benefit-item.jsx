import { TooltipIcon } from '@/assets/icons';
import { Tooltip } from '@/components/tooltip';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        {item.subtitle}
        {item.tooltip?.length && (
          <Tooltip
            text="При наличии свободных мест"
            icon={<TooltipIcon />}
            additionalClassname={styles.tooltip}
          />
        )}
      </h3>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};
