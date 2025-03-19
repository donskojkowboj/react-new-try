import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { feedbackSchema } from '@/pages/main-page/components/main-form/helpers/schema';

import styles from './form.module.scss';

export const Form = () => {
  const {
    control,
    handleSubmit,
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
      <Controller
        name="name"
        control={control}
        render={({ field }) => <Input {...field} placeholder="Имя" error={errors.name?.message} />}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input type="tel" {...field} placeholder="Телефон" error={errors.phone?.message} />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input type="email" {...field} placeholder="E-mail" error={errors.email?.message} />
        )}
      />

      <Button variant="secondary" additionalClassname={styles.button}>
        Оформить заявку
      </Button>
    </form>
  );
};
