import { forwardRef, useState } from 'react';

import styles from './input.module.scss';

export const Input = forwardRef(
  ({ id, type = 'text', value, onChange, placeholder, register, error, ...rest }, ref) => {
    const [inputValue, setInputValue] = useState(value || '');

    const getInputNumbersValue = (value) => {
      return value.replace(/\D/g, '');
    };

    const handleInputChange = (e) => {
      const input = e.target;
      let newValue = input.value;

      if (type === 'tel') {
        const inputNumbersValue = getInputNumbersValue(newValue);
        let formattedInputValue = '';

        if (!inputNumbersValue) {
          newValue = '';
        } else if (inputNumbersValue[0] === '7' || inputNumbersValue[0] === '8') {
          formattedInputValue = '+7 ';

          if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
          }

          newValue = formattedInputValue;
        }
      }
      setInputValue(newValue);

      if (onChange) {
        onChange({ target: { value: newValue } });
      }
    };

    return (
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          id={id}
          onChange={handleInputChange}
          value={inputValue}
          type={type}
          ref={ref}
          placeholder={placeholder}
          {...rest}
          {...register}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
