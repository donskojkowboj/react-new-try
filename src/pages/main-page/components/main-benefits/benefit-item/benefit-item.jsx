import { TooltipIcon } from '@/assets/icons';
import { Tooltip } from '@/components/tooltip';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ title, description, tooltipText }) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        {title}
        {tooltipText?.length && (
          <Tooltip text="При наличии свободных мест" icon={<TooltipIcon />} />
        )}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
