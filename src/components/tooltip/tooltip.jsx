import { useState } from 'react';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon, additionalClassname = '' }) => {
  const [show, setShow] = useState(false);

  const tooltipClassname = `${styles.tooltip} ${additionalClassname}`;

  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={tooltipClassname}
    >
      <span className={styles.icon}>{icon}</span>
      {show && <span className={styles.description}>{text}</span>}
    </span>
  );
};
