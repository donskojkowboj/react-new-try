import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Input } from '../../input';

export const PhoneInput = ({ control, name, error, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputMask mask="+7 (999) 999-99-99" value={value} onChange={onChange} onBlur={onBlur}>
          {(inputProps) => (
            <Input
              {...inputProps}
              id={name}
              name={name}
              error={error}
              placeholder={placeholder}
              type="tel"
            />
          )}
        </InputMask>
      )}
    />
  );
};
