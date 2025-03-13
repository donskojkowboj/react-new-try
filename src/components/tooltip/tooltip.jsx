import { useState } from 'react';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon, additionalClassname = '' }) => {
  const [isShow, setIsShow] = useState(false);

  const handleMouseEnter = () => {
    setIsShow(true);
  };

  const handleMouseLeave = () => {
    setIsShow(false);
  };

  const tooltipClassname = `${styles.tooltip} ${additionalClassname}`;

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={tooltipClassname}
    >
      <span className={styles.icon}>{icon}</span>
      {isShow && <span className={styles.description}>{text}</span>}
    </span>
  );
};
