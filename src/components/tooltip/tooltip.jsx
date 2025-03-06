import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon }) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.description}>{text}</span>
    </div>
  );
};
