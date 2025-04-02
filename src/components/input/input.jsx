import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, register, error, ...rest }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
        {...register}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
