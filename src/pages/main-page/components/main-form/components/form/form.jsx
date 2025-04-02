import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { PhoneInput } from '@/components/input/components/phone-input';

import { feedbackSchema } from '../../helpers/schema';

import styles from './form.module.scss';

export const Form = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
    resolver: yupResolver(feedbackSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        register={register('name')}
        placeholder="Имя"
        name="name"
        error={errors.name?.message}
      />
      <PhoneInput
        name="phone"
        control={control}
        error={errors.phone?.message}
        placeholder="Телефон"
      />
      <Input
        id="email"
        register={register('email')}
        placeholder="E-mail"
        name="email"
        error={errors.email?.message}
      />

      <Button variant="secondary" additionalClassname={styles.button}>
        Оформить заявку
      </Button>
    </form>
  );
};
